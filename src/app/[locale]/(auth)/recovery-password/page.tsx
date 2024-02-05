import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function RecoveryPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>RecoveryPassword</h1>
    </main>
  );
}
