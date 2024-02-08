import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { stripe } from "@/lib/stripe";

const stripeWebhookEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
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
      const subscription = event.data.object as Stripe.Subscription;

      console.log("subscription webhook", subscription);

      switch (event.type) {
        case "customer.subscription.created":
        case "customer.subscription.updated":
          if (subscription.status === "active") {
            await prisma.subscription.create({
              data: {
                priceId: subscription.plan.id,
              },
            });
          }
      }
    }

    return NextResponse.json({});
  } catch (error: any) {
    console.log("error", error.message);
    return NextResponse.json(
      { message: "Webhook error: " + error.message },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}