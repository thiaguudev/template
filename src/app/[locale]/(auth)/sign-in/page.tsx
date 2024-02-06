import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import UserNav from "@/components/UserNav";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SignIn</h1>
    </main>
  );
}
