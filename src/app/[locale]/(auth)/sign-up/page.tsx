import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import SignUpForm from "@/components/auth/form/SignUpForm";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUpForm />
    </div>
  );
}
