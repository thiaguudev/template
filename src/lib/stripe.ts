import Stripe from "stripe";

import { env } from "@/lib/env";
import { prisma } from '@/lib/prisma';
import { getServerAuthSession } from "@/lib/auth";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export async function hasSubscription() {
  const authSession = await getServerAuthSession();

  if (authSession) {
    const user = await prisma.user.findFirst({
      where: { id: authSession.user.id },
    })
    return user?.customerId
  }

  return false;
}

export async function createCheckout(planId: string) {
  const authSession = await getServerAuthSession();

  if (!authSession) throw new Error('');

  const plan = await hasPlan(planId)

  if (!plan) throw new Error('');

  const customer = await createCustomerIfNull();

  const checkout = await stripe.checkout.sessions.create({
    metadata: { userId: authSession.user.id },
    customer,
    expand: ['payment_intent'],
    success_url: env.STRIPE_SUCCESS_URL,
    mode: "subscription",
    line_items: [{ price: plan.priceId, quantity: 1 }],
  })

  await prisma.user.update({
    where: { id: authSession.user.id },
    data: { customerId: customer }
  })

  return checkout
}

export async function createCustomerIfNull() {
  const authSession = await getServerAuthSession();

  if (!authSession) throw new Error('');

  const user = await prisma.user.findFirst({
    where: { id: authSession.user.id },
  })

  if (!user) throw new Error('')

  if (user?.customerId) return user?.customerId

  const customer = await stripe.customers.create({ email: user.email! })

  return customer.id
}

export async function hasPlan(planId: string) {
  const plan = await prisma.plan.findUnique({ where: { id: planId } })
  return plan || false
}
