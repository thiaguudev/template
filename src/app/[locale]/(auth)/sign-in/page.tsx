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
    <div className="min-h-screen flex justify-center items-center">
      <SignInForm />
    </div>
  );
}
