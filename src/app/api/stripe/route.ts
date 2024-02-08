import { NextRequest, NextResponse } from "next/server";
import { useLocale } from "next-intl";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getServerAuthSession } from "@/lib/auth";

/*
  Starter: price_1OeiErKFxdF5l7Kyp5Fwo80l

  Plus: price_1OeiFgKFxdF5l7Ky49c1c1gM

  Business: price_1OeiG0KFxdF5l7KyG8iihEcK
*/

export async function POST(req: NextRequest) {
  // const locale = useLocale();
  // console.log("locale", locale);
  const locale = "en";
  const authSession = await getServerAuthSession();
  const { priceId } = await req.json();

  if (!authSession)
    return new NextResponse("UNAUTHORIZED", {
      status: StatusCodes.UNAUTHORIZED,
    });

  const userId = authSession?.user.id;

  try {
    const subscriptionExists = await prisma.user.findFirst({
      where: { id: userId },
      include: { Subscription: true },
    });

    if (subscriptionExists?.Subscription?.subscritiptionId) {
      const subscription = await stripe.billingPortal.sessions.create({
        customer: userId,
        return_url: `/${locale}/app/settings?success=true`,
      });

      return NextResponse.json({ url: subscription.url });
    } else {
      const subscription = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/en/app?success=true",
        mode: "subscription",
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
      });

      return NextResponse.json({ url: subscription.url });
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
