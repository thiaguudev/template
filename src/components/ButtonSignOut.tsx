import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";

export default function ButtonSignOut() {
  const handleSignOut = () => signOut();
  const t = useTranslations("Auth");

  return <Button onClick={handleSignOut}>{t("signOut")}</Button>;
}
