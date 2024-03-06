"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "@/components/banner";
import Header from "@/components/layout/header";

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
      <Banner />
    </>
  );
}
