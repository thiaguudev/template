"use client";

import { useLocale, useTranslations } from "next-intl";

import { localeNames, locales, usePathname, useRouter } from "@/navigation";

export default function LandingPage() {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("Auth");
  const locale = useLocale();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <select value={locale} onChange={switchLocale}>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </main>
  );
}
