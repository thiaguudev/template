"use client";

import { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Icons } from "./shared/icons";

type ButtonSignInGoogleProps = {
  children?: ReactNode;
};

export default function ButtonSignInGoogle({
  children,
}: ButtonSignInGoogleProps) {
  const locale = useLocale();
  const t = useTranslations("Auth");

  const handleSign = async () => {
    await signIn("google", { callbackUrl: `/${locale}/app` });
  };

  return (
    <Button
      onClick={handleSign}
      variant="outline"
      size="lg"
      className="flex items-center gap-2"
      type="button"
    >
      {<Icons.google />}
      {children ?? <span>Login with Google</span>}
    </Button>
  );
}
