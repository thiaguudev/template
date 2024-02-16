"use client";

import { useTranslations } from "next-intl";

import ButtonSignIn from "@/components/ButtonSignIn";

export default function SignUpForm() {
  const t = useTranslations("Auth");

  return <ButtonSignIn>{t("signInWithGoogle")}</ButtonSignIn>;
}
