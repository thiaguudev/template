import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import RecoveryPasswordForm from "@/components/auth/form/RecoveryPassword";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function RecoveryPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <RecoveryPasswordForm />
    </div>
  );
}
