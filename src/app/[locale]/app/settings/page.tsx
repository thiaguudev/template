"use client";

import {
  Danger,
  DollarCircle,
  NotificationBing,
  People,
  Profile2User,
} from "iconsax-react";

import CardSettings from "@/components/card-settings";
import Page from "@/components/shared/page";

export default function Layout() {
  return (
    <Page>
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-2xl mb-3 text-primary font-black">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <CardSettings
          href="/app/settings/general"
          title="Personal Info"
          description="Provide personal details and how we can reach you"
          icon={Profile2User}
        />

        <CardSettings
          href="/app/settings/billing"
          title="Billing and payments"
          description="Review payments, payouts, coupons, and gift cards"
          icon={DollarCircle}
        />

        <CardSettings
          href="/app/settings/team"
          title="Team"
          description="Review payments, payouts, coupons, and gift cards"
          icon={People}
        />

        <CardSettings
          href="/app/settings/notifications"
          title="Notifications"
          description="Choose notification preferences and how you want to be contacted"
          icon={NotificationBing}
        />

        <CardSettings
          href="/app/settings/danger-zone"
          title="Danger Zone"
          description="Add a work email for business trip benefits"
          icon={Danger}
        />
      </div>
    </Page>
  );
}
