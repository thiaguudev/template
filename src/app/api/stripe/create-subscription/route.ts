import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { customerId, priceId } = await req.json();

  try {
    const subscriptionExists = await prisma.user.findFirst({
      where: { customerId },
      include: { Subscription: true },
    });

    if (!subscriptionExists?.Subscription?.subscritiptionId) {
      throw new Error(
        "Could not find the subscription ID update the subscription"
      );
    }

    if (
      subscriptionExists?.Subscription?.subscritiptionId &&
      subscriptionExists.Subscription.active
    ) {
      const currentSubscription = await stripe.subscriptions.retrieve(
        subscriptionExists.Subscription.subscritiptionId
      );

      const subscription = await stripe.subscriptions.update(
        subscriptionExists?.Subscription?.subscritiptionId,
        {
          items: [
            {
              id: currentSubscription.items.data[0].id,
              deleted: true,
            },
            { price: priceId },
          ],
        }
      );

      console.log(subscription);

      return NextResponse.json({
        subscriptionId: subscription.id,
        // clientSecret: subscription.
      });
    } else {
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId,
          },
        ],
        payment_behavior: "default_incomplete",
        payment_settings: { save_default_payment_method: "on_subscription" },
        expand: ["latest_invoice.payment_intent"],
      });

      console.log(subscription);

      return NextResponse.json({
        subscriptionId: subscription.id,
        // clientSecret: subscription.
      });
    }
  } catch (error) {
    return new NextResponse("");
  }
}
