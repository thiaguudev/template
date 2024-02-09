import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { stripe } from "@/lib/stripe";

const stripeWebhookEvents = new Set([
  "customer.subscription.created",
]);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOKS_SECRET
    );

    if (stripeWebhookEvents.has(event.type)) {
      const subscription = event.data.object as any;

      switch (event.type) {
        case "customer.subscription.created": {
          console.log('subscription', subscription)

          const plan = await prisma.plan.findUnique(
            {
              where: {
                priceId: subscription.plan.id as string
              }
            }
          )

          // if (!plan) return new NextResponse('❌ BAD REQUEST', {
          //   status: StatusCodes.BAD_REQUEST
          // })

          // const subscriptionUpsertData = {
          //   subscritiptionId: subscription.id,
          //   planId: plan?.id,
          //   customerId: subscription.customer as string,
          //   currentPeriodEndDate: new Date(subscription.current_period_end * 1000),
          //   active: true
          // }

          // const sub = await prisma.subscription.upsert({
          //   where: {
          //     customerId: subscription.customer
          //   },
          //   create: subscriptionUpsertData,
          //   update: subscriptionUpsertData
          // })


          // await prisma.user.update({
          //   where: { id: subscription.metadata.userId },
          //   data: {
          //     customerId: subscription.customer,
          //     subscriptionId: sub.id
          //   }
          // })
        }
      }
    }

    return NextResponse.json({});
  } catch (error: any) {
    console.log("❌ " + error.message);
    return NextResponse.json(
      { message: "Webhook error: " + error.message },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}
