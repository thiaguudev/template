import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import SignInForm from "@/components/auth/form/SignInForm";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInForm />
    </div>
  );
}
