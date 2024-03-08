"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight2,
  Calendar,
  Document,
  Element3,
  Folder2,
  Headphone,
  Profile2User,
  Setting2,
  Setting4,
  Star,
  Star1,
  Timer1,
} from "iconsax-react";

import { useCentralStore } from "@/app/store";
import { Link, usePathname } from "@/navigation";
import ProfileImage from "../../../public/images/testimonial-01.jpg";

function Sidebar() {
  const pathname = usePathname();
  const { setIsSidebarOpen, isSidebarOpen } = useCentralStore();

  useEffect(() => {
    if (!isSidebarOpen) setIsSidebarOpen(!isSidebarOpen);
  }, [pathname, isSidebarOpen, setIsSidebarOpen]);

  return (
    <div className="w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden">
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

        {/* section divider */}
        <hr className="bg-gray-400 mx-2" />

        {/* other section */}
        <div className="flex flex-col h-full justify-between">
          {/* top */}
          <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
            <Link
              href="/app"
              className={`flex ${
                pathname === "/app" ? "text-primary" : ""
              } hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            >
              <Element3 variant="Outline" size={16} />
              Dashboard
            </Link>

            <button
              className={`flex ${
                pathname === "/app/calendar" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Calendar size={16} />
              Calendar
            </button>

            <button
              className={`flex ${
                pathname === "/app/timeoff" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Timer1 size={16} />
              Time Off
            </button>

            <button
              className={`flex ${
                pathname === "/app/projects" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Folder2 size={16} />
              Projects
            </button>

            <Link
              href="/app/team"
              className={`flex ${
                pathname === "/app/team" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Profile2User size={16} />
              Teams
            </Link>

            <Link
              href={"/app/integrations"}
              className={`flex ${
                pathname === "/app/integrations" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Setting4 size={16} />
              Integrations
            </Link>

            <button
              className={`flex ${
                pathname === "/app/benefits" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Star size={16} />
              Benefits
            </button>

            <button
              className={`flex ${
                pathname === "/app/documents" ? "text-primary" : ""
              } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              <Document size={16} />
              Documents
            </button>
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium md:px-2">
              <Link
                href="/app/settings/general"
                className={`flex ${
                  pathname === "/app/settings/general" ? "text-primary" : ""
                } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
              >
                <Setting2 size={16} />
                Settings
              </Link>

              <button
                className={`flex ${
                  pathname === "/app/support" ? "text-primary" : ""
                } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
              >
                <Headphone size={16} />
                Support
              </button>
            </div>

            <hr className="bg-gray-400 mx-2 my-4" />

            {/* bottom */}
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
