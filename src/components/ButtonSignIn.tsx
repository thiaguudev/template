"use client";

import { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";

type ButtonSignInProps = {
  children: ReactNode;
};

export default function ButtonSignIn({ children }: ButtonSignInProps) {
  const locale = useLocale();

  const handleSign = async () => {
    await signIn("google", { callbackUrl: `/${locale}/app` });
  };

  return (
    <Button onClick={handleSign} variant="destructive">
      {children}
    </Button>
  );
}
