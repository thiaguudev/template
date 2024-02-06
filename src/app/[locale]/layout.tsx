import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import "../globals.css";
import UserNav from "@/components/UserNav";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={fontSans.className}>
        <NextIntlClientProvider messages={messages}>
          <UserNav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
