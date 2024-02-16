"use client";

import { useTranslations } from "next-intl";

import ButtonSignInGoogle from "@/components/ButtonSignInGoogle";
import ButtonSignInFacebook from "@/components/ButtonSignInFacebook";

export default function SignInForm() {
  const t = useTranslations("Auth");

  return (
    <div className="flex justify-center flex-col gap-3 items-stretch">
      <ButtonSignInGoogle />
      <ButtonSignInFacebook />
    </div>
  );
}
