"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

import Header from "@/components/layout/header";
import "aos/dist/aos.css";

type LandingLayoutProps = {
  children: ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />
      {children}
      {/* <Banner /> */}
    </>
  );
}
