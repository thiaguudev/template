"use client";

import { Flash, Gift, Messages1, People, Setting2, Star1 } from "iconsax-react";
import { HelpCircle, MessageSquareMore } from "lucide-react";

import { signOut } from "next-auth/react";

import useMediaQuery from "@/hooks/use-media-query";
import MenuLink from "../menu-link";
import { Button } from "../ui/button";
import UserNav from "../UserNav";
import { ThemeSwitcherTabs } from "../ThemeSwitcher";

function Sidebar() {
  const { isDesktop } = useMediaQuery();

  return (
    <div
      className={`w-60 shrink-0 md:block h-screen sticky top-0 ${
        !isDesktop && "bg-background"
      }`}
    >
      <div className="w-full h-full border-r">
        <div className="p-4 md:p-6 flex cursor-pointer group items-center gap-2">
          <div className="h-10 outline outline-emerald-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-emerald-500 to-emerald-600 text-white">
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

            <MenuLink href="/app/surveys" title="Surveys" icon={Messages1} />

            <MenuLink href="/app/settings/team" title="Team" icon={People} />

            <MenuLink
              href="/app/feedback"
              title="Feedback"
              icon={MessageSquareMore}
            />
            <MenuLink href="/app/help" title="Help" icon={HelpCircle} />
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium md:px-2">
              <MenuLink href="/app/settings" title="Settings" icon={Setting2} />

              <ThemeSwitcherTabs />

              <Button
                variant="destructive"
                className="w-full"
                onClick={() => signOut()}
              >
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
