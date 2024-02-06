"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function Chat() {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CHAT_ID as string);
  }, []);

  return null;
}
