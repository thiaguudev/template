"use client";

import {
  Building3,
  Danger,
  DollarCircle,
  NotificationBing,
  People,
  Profile2User,
  Security,
} from "iconsax-react";

import CardSettings from "@/components/card-settings";

export default function Layout() {
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-3 text-primary font-black">Settings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardSettings
          href="/app/settings/general"
          title="Personal Info"
          description="Provide personal details and how we can reach you"
          icon={Profile2User}
        />

        <CardSettings
          href="/app/settings/security"
          title="Login & security"
          description="Update your password and secure your account"
          icon={Security}
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
          href="/app/settings/powered-by"
          title="Powered by"
          description="Manage Powered By badge for all your forms, widgets"
          icon={Building3}
        />

        <CardSettings
          href="/app/settings/danger-zone"
          title="Danger Zone"
          description="Add a work email for business trip benefits"
          icon={Danger}
        />
      </div>
    </div>
  );
}
