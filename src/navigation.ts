import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Locale } from "@/lib/types";

export const locales: Locale[] = ["en", "pt"] as const;

export const defaultLocale: Locale = "pt";

export const localePrefix = "always";

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
