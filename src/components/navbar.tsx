import React from "react";
import Image from "next/image";
import { SidebarLeft } from "iconsax-react";

import ProfileImage from "../../public/images/testimonial-01.jpg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AddButton } from "./buttons";

function Navbar({
  isOpen,
  sidebarChange,
}: {
  isOpen: boolean;
  sidebarChange: (value: boolean) => void;
}) {
  return (
    <div>
      <div className="flex p-4 md:p-6 justify-between items-center">
        <div className="flex items-center justify-between gap-2">
          <Image
            src={ProfileImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="">
            <p className="text-sm font-semibold text-foreground">
              Vitória Carolina
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Welcome back
            </p>
          </div>
        </div>

        <button
          onClick={() => sidebarChange(!isOpen)}
          className="all-center text-gray-500 h-8 w-8 md:hidden"
        >
          <SidebarLeft size={16} />
        </button>

        <div className="text-gray-500 hidden md:flex gap-2">
          <ThemeSwitcher />

          <AddButton onClick={() => console.log("")}>
            <span className="hidden md:inline">Create Survey</span>
          </AddButton>
        </div>
      </div>

      <hr className="bg-gray-400 mx-2" />
    </div>
  );
}

export default Navbar;
