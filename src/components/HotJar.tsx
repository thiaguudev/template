"use client";

import { useEffect } from "react";
import { hotjar } from "react-hotjar";

export default function HotJar() {
  useEffect(() => {
    hotjar.initialize(Number(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID), 6);
  }, []);

  return null;
}
