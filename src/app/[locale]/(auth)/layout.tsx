import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
};

type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  );
}
