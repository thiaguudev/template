"use client";
import { ReactNode } from "react";
import { Separator } from "@radix-ui/react-select";

import { Link, usePathname } from "@/navigation";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-3 text-primary font-[900]">
        Project Settings
      </h1>
      <div className="flex justify-between items-center">
        <div
          className={`p-1 ${
            pathname === "/app/settings/general" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/general">General</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/domain" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/domain">Domain</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/team" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/team">Team</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/notifications" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/notifications">Notifications</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/powered-by" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/powered-by">Powered By</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/billing" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/billing">Billing</Link>
        </div>
        <div
          className={`p-1 ${
            pathname === "/app/settings/danger-zone" &&
            "text-primary border-b-primary border-b"
          }`}
        >
          <Link href="/app/settings/danger-zone">Danger Zone</Link>
        </div>
      </div>
      <Separator className="mb-3" />
      {children}
    </div>
  );
}
