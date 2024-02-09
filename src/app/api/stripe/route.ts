import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getServerAuthSession } from "@/lib/auth";

/*
  Freemium  
  Starter:    price_1OeiErKFxdF5l7Kyp5Fwo80l
  Plus:        price_1OeiFgKFxdF5l7Ky49c1c1gM
  Business:   price_1OeiG0KFxdF5l7KyG8iihEcK
*/

export async function POST(req: NextRequest) {
  const locale = "en";
  const authSession = await getServerAuthSession();
  const { planId } = await req.json();

  if (!authSession) {
    return new NextResponse("UNAUTHORIZED", {
      status: StatusCodes.UNAUTHORIZED,
    });
  }

  try {
    const planExists = await prisma.plan.findUnique({
      where: {
        id: planId
      }
    })

    if (!planExists) {
      return new NextResponse("BAD REQUEST", { status: StatusCodes.BAD_REQUEST })
    }

    const subscriptionExists = await prisma.user.findFirst({
      where: {
        id: authSession.user.id
      },
      include: { subscription: true },
    });

    if (subscriptionExists?.subscription?.customerId) {
      const subscription = await stripe.billingPortal.sessions.create({
        customer: subscriptionExists.subscription.customerId,
        return_url: `/${locale}/app/settings?success=true`,
      });

      return NextResponse.json({ url: subscription.url });
    } else {
      const subscription = await stripe.checkout.sessions.create({
        metadata: {
          userId: authSession.user.id
        },
        success_url: "http://localhost:3000/en/app?success=true",
        mode: "subscription",
        line_items: [
          {
            price: planExists.priceId,
            quantity: 1
          }
        ]
      })

      console.log('subscription send', subscription)

      return NextResponse.json({ url: subscription.url })
    }





    // if (subscriptionExists?.subscription?.subscritiptionId) {
    //   const subscription = await stripe.billingPortal.sessions.create({
    //     customer: customerId,
    //     return_url: `/${locale}/app/settings?success=true`,
    //   });

    //   return NextResponse.json({ url: subscription.url });
    // } else {
    // const subscription = await stripe.checkout.sessions.create({
    //   success_url: "http://localhost:3000/en/app?success=true",
    //   mode: "subscription",
    //   line_items: [
    //     {
    //       price: priceId,
    //       quantity: 1,
    //     },
    //   ],
    // });
    // return NextResponse.json({ url: subscription.url });
    // }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
