"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/layout/sidebar";
import { usePathname } from "@/navigation";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarChange = (value: boolean) => {
    setIsSidebarOpen(value);
  };

  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${isSidebarOpen ? "overflow-hidden" : ""} h-screen`}
      >
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsSidebarOpen(false)}
              className="bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20"
            />
          )}
        </AnimatePresence>

        {/* mobile sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
              className="absolute md:hidden z-30 top-0 left-0"
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex">
          <div className="hidden md:block">
            {!("/app/surveys/configure-survey" === pathname) && <Sidebar />}
          </div>

          <div className="flex grow flex-col">
            <div className="w-full max-w-[1440px] mx-auto">
              <Navbar
                isOpen={isSidebarOpen}
                sidebarChange={handleSidebarChange}
              />
            </div>
            {children}
          </div>
        </div>
      </motion.div>

      <Toaster />
    </>
  );
}
