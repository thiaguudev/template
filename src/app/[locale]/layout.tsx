import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import UserNav from "@/components/UserNav";
import Chat from "@/components/Chat";
import HotJar from "@/components/HotJar";
import "../globals.css";

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
        <Chat />
        <HotJar />
      </body>
    </html>
  );
}
