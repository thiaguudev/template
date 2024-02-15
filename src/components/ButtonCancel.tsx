"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";

export default function ButtonCancel() {
  const t = useTranslations("App");

  const router = useRouter();
  const handleOnClick = () => router.back();

  return (
    <Button variant="outline" onClick={handleOnClick}>
      {t("cancel")}
    </Button>
  );
}
