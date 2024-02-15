import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import ButtonOpenApp from "@/components/ButtonOpenApp";

export default function LandingPage() {
  const t = useTranslations("Auth");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("title")}</h1>
      <ButtonOpenApp />
      <LanguageSwitcher />
    </main>
  );
}
