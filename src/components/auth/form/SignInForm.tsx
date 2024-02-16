"use client";

import { useTranslations } from "next-intl";

import ButtonSignIn from "@/components/ButtonSignIn";

export default function SignInForm() {
  const t = useTranslations("Auth");

  return (
    <div className="flex justify-center items-center">
      <ButtonSignIn>{t("signInWithGoogle")}</ButtonSignIn>
    </div>
  );
}
