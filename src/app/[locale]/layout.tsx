import { ReactNode } from "react";
import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

import { siteConfig } from "@/config/site";
import { fontEffect, fontMono, fontSans } from "@/config/fonts";
import Chat from "@/components/Chat";
import HotJar from "@/components/HotJar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";
import "../css/style.css";
import "../globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: { locale: Locale };
}>;

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={`bg-background tracking-tighter scroll-smooth antialiased ${fontSans.variable} ${fontMono.variable} ${fontEffect.variable}`}
      >
        <div className="flex flex-col min-h-screen font-sans">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </div>
        <Chat />
        <HotJar />
        <Analytics />
      </body>
    </html>
  );
}
