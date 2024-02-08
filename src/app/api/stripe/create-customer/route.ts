import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const customer = await stripe.customers.create(data);
    return Response.json({ customerId: customer.id });
  } catch (error) {
    return NextResponse.json("Internal Server Error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
