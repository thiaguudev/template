import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { createCheckout, hasPlan, hasSubscription, stripe } from "@/lib/stripe";
import { getServerAuthSession } from "@/lib/auth";
import { env } from "@/lib/env";

export async function POST(req: NextRequest) {
  const authSession = await getServerAuthSession();
  const { planId } = await req.json();

  if (!authSession)
    return new NextResponse("UNAUTHORIZED", {
      status: StatusCodes.UNAUTHORIZED,
    });

  try {
    const plan = await hasPlan(planId);

    if (!plan)
      return new NextResponse("BAD REQUEST", {
        status: StatusCodes.BAD_REQUEST,
      });

    const customerId = await hasSubscription();

    if (customerId) {
      const subscription = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: env.STRIPE_SUCCESS_URL,
      });

      return NextResponse.json({ url: subscription.url });
    } else {
      const checkout = await createCheckout(planId);
      return NextResponse.json({ url: checkout.url });
    }
  } catch (error: any) {
    return new NextResponse(error.message, { status: StatusCodes.BAD_REQUEST });
  }
}
