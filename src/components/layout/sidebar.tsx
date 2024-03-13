"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight2,
  Flash,
  Gift,
  Messages1,
  Setting2,
  Star1,
} from "iconsax-react";

import { useCentralStore } from "@/app/store";
import { usePathname } from "@/navigation";
import useMediaQuery from "@/hooks/use-media-query";
import MenuLink from "../menu-link";

import { Button } from "../ui/button";
import UserNav from "../UserNav";

function Sidebar() {
  const { isDesktop } = useMediaQuery();
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();

  useEffect(() => {
    if (!isSidebarOpen) setIsSidebarOpen(!isSidebarOpen);
  }, [pathname, isSidebarOpen, setIsSidebarOpen]);

  return (
    <div
      className={`w-60 shrink-0 md:block h-screen sticky top-0 ${
        !isDesktop && "bg-black"
      }`}
    >
      <div className="w-full h-full border-r">
        <div className="p-4 md:p-6 flex cursor-pointer group items-center gap-2">
          <div className="h-10 outline outline-violet-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-violet-500 to-violet-600 text-white">
            <Star1
              size={24}
              className="relative group-hover:scale-75 duration-200"
            />
          </div>
          <div>
            <h1 className="text-sm text-foreground font-bold">Worked task</h1>
            <p className="text-xs text-muted-foreground font-medium">
              Survey Apoli
            </p>
          </div>
        </div>

        <hr className="bg-gray-400 mx-2" />

        <div className="flex flex-col h-full justify-between">
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
            <button className="flex text-primary hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2">
              <Flash variant="Outline" size={16} />
              Upgrade
            </button>

            <button className="flex hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2">
              <Gift variant="Outline" size={16} />
              Earn $50
            </button>

            <MenuLink
              href="/app/surveys"
              title="Surveys"
              active={pathname === "/app/surveys"}
              icon={Messages1}
            />
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium md:px-2">
              <MenuLink
                href="/app/settings"
                title="Settings"
                active={pathname === "/app/settings"}
                icon={Setting2}
              />

              <Button variant="destructive" className="w-full hover:scale-105">
                Sign Out
              </Button>
            </div>

            <hr className="bg-gray-400 mx-2 my-4" />

            <div className="flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
