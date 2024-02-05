"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ButtonSignIn() {
  const t = useTranslations("Auth");
  const handleSign = () => signIn("google");

  return <Button onClick={handleSign}>{t("signIn")}</Button>;
}
