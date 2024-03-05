import { ReactNode } from "react";

import UserNav from "@/components/UserNav";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import PlansList from "@/components/Plans";

type AppLayoutProps = {
  children: ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProps) {
  return <main />;
}
