// "use client";

import Page from "@/components/shared/page";
import { prisma } from "@/lib/prisma";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { getServerAuthSession } from "@/lib/auth";
import { auth } from "@clerk/nextjs";

type PlanLimitsProps = {
  title: string;
  current: number;
  limit: number;
};

function PlanLimits({ title, current, limit }: PlanLimitsProps) {
  const value = (current / limit) * 100;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="capitalize">{title}</span>{" "}
        <span>
          {current} / {limit}
        </span>
      </div>

      <Progress
        value={value}
        indicatorColor={value === 100 ? "bg-red-500" : ""}
      />
    </div>
  );
}

export default async function BillingSettings() {
  const authSession = await getServerAuthSession();

  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: authSession?.user?.id,
    },
    select: {
      plan: true,
    },
  });

  console.log("subscription", subscription?.plan?.name);

  return (
    <Page title="Billing and Payments" subtitle="Manage you plan and payments.">
      <div className="flex flex-col border p-3 rounded-xl">
        <div className="flex justify-between items-center px-3 py-1">
          <span className="text-muted-foreground text-2xl capitalize">
            {subscription?.plan?.name}
          </span>
          <span className="text-muted-foreground text-xl">$0 per month</span>
        </div>
        <Separator className="w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3">
          <PlanLimits title="responses" current={27} limit={50} />
          <PlanLimits title="users" current={1} limit={1} />
          <PlanLimits title="flows" current={1} limit={1} />
        </div>
      </div>
    </Page>
  );
}
