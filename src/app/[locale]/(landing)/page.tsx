"use client";

import { useLocale, useTranslations } from "next-intl";

import { localeNames, locales, usePathname, useRouter } from "@/navigation";
import ButtonSignOut from "@/components/ButtonSignOut";

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
      {/* <Avatar>
        <AvatarImage src={authSession?.user?.image as string} alt="@shadcn" />
        <AvatarFallback>
          {authSession?.user?.name?.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar> */}
      <select value={locale} onChange={switchLocale}>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>

      <ButtonSignOut />
    </main>
  );
}
