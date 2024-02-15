"use client";

import { useLocale, useTranslations } from "next-intl";

import { localeNames, locales, usePathname, useRouter } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("App");

  const switchLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Select defaultValue={locale} onValueChange={switchLocale}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("selectALanguage")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("selectALanguage")}</SelectLabel>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {localeNames[loc]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
