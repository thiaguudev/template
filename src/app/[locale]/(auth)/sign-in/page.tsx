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
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl px-5">
        <div className="sm:w-1/2 flex justify-center items-center">
          <SignInForm />
        </div>
        <div className="w-1/2 h-[380px] flex items-center justify-center">
          <img src="/1.png" alt="Hero login" className="block rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
