"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight2,
  Document,
  Flash,
  Folder2,
  Headphone,
  Messages1,
  Profile2User,
  Setting2,
  Setting4,
  Star,
  Star1,
  Timer1,
} from "iconsax-react";

import { useCentralStore } from "@/app/store";
import { usePathname } from "@/navigation";
import MenuLink from "../menu-link";
import ProfileImage from "../../../public/images/testimonial-01.jpg";
import useMediaQuery from "@/hooks/use-media-query";

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
            <h1 className="text-sm font-bold text-white">Worked task</h1>
            <p className="text-xs text-gray-500 font-medium">Survey Apoli</p>
          </div>
        </div>

        <hr className="bg-gray-400 mx-2" />

        <div className="flex flex-col h-full justify-between">
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
            <button className="flex text-primary hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2">
              <Flash variant="Outline" size={16} />
              Upgrade
            </button>

            <MenuLink
              href="/app/surveys"
              title="Surveys"
              active={pathname === "/app/surveys"}
              icon={Messages1}
            />

            <MenuLink
              href="/app/timeoff"
              title="Time Off"
              active={pathname === "/app/timeoff"}
              icon={Timer1}
            />

            <MenuLink
              href="/app/projects"
              title="Projects"
              active={pathname === "/app/projects"}
              icon={Folder2}
            />

            <MenuLink
              href="/app/team"
              title="Team"
              active={pathname === "/app/team"}
              icon={Profile2User}
            />

            <MenuLink
              href="/app/integrations"
              title="Integrations"
              active={pathname === "/app/integrations"}
              icon={Setting4}
            />

            <MenuLink
              href="/app/benefits"
              title="Benefits"
              active={pathname === "/app/benefits"}
              icon={Star}
            />

            <MenuLink
              href="/app/documents"
              title="Documents"
              active={pathname === "/app/documents"}
              icon={Document}
            />
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium md:px-2">
              <MenuLink
                href="/app/settings"
                title="Settings"
                active={pathname === "/app/settings/general"}
                icon={Setting2}
              />

              <MenuLink
                href="/app/support"
                title="Support"
                active={pathname === "/app/support"}
                icon={Headphone}
              />
            </div>

            <hr className="bg-gray-400 mx-2 my-4" />

            <div className="flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200">
              <div className="flex items-center gap-2">
                <Image
                  src={ProfileImage}
                  alt="User"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div className="">
                  <p className="text-sm font-semibold text-white">
                    Vitória Carolina
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    vitoria@carolina.com
                  </p>
                </div>
              </div>

              <button className="text-gray-500">
                <ArrowRight2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
