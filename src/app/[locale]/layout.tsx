import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Chat from "@/components/Chat";
import HotJar from "@/components/HotJar";
import { ThemeProvider } from "@/components/ThemeProvider";

import "../globals.css";
import { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>;

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={cn("min-h-screen font-sans", fontSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Chat />
        <HotJar />
        <Analytics />
      </body>
    </html>
  );
}
