import React from "react";
import Image from "next/image";
import {
  Add,
  CalendarEdit,
  DirectNotification,
  SearchNormal1,
  SidebarLeft,
} from "iconsax-react";

import ProfileImage from "../../public/images/testimonial-01.jpg";

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
        {/* profile/left section */}
        <div className="flex items-center justify-between gap-2">
          <Image
            src={ProfileImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="">
            <p className="text-sm font-semibold text-white">Vitória Carolina</p>
            <p className="text-xs font-medium text-gray-500">Welcome back</p>
          </div>
        </div>

        <button
          onClick={() => sidebarChange(!isOpen)}
          className="all-center text-gray-500 h-8 w-8 md:hidden"
        >
          <SidebarLeft size={16} />
        </button>

        {/* right section */}
        <div className="text-gray-500 hidden md:flex gap-2">
          <button className="all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-xl">
            <SearchNormal1 size={16} />
          </button>

          <button className="all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-xl">
            <DirectNotification size={16} />
          </button>

          <button className="btn h-8 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-xl text-xs all-center">
            <CalendarEdit size={16} />
            <span className="hidden md:inline">Schedule</span>
          </button>

          <button className="h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-xl text-xs md:flex items-center justify-center">
            <Add size={16} />
            <span className="hidden md:inline">Create request</span>
          </button>
        </div>
      </div>

      <hr className="bg-gray-400 mx-2" />
    </div>
  );
}

export default Navbar;
