import { PricingCards } from "@/components/pricing-cards";
import { getServerAuthSession } from "@/lib/auth";

export const metadata = {
  title: "Pricing",
};

export default async function PricingPage() {
  const session = await getServerAuthSession();
  let subscriptionPlan;

  if (session?.user) {
    // subscriptionPlan = await getUserSubscriptionPlan(user.id);
    // subscriptionPlan = {};
  }

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        userId={session?.user?.id}
        subscriptionPlan={subscriptionPlan}
      />
      <hr className="container" />
    </div>
  );
}
