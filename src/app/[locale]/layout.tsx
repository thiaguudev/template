import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
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
      <body
        className={cn(
          "antialiased bg-gray-900 text-gray-200 tracking-tight",
          fontSans.className
        )}
      >
        <div className="flex flex-col min-h-screen">
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
        </div>
        <Chat />
        <HotJar />
        <Analytics />
      </body>
    </html>
  );
}
