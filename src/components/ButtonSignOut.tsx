"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";

export default function ButtonSignOut() {
  const t = useTranslations("Auth");
  const handleSignOut = () => signOut();
  return <Button onClick={handleSignOut}>{t("signOut")}</Button>;
}
