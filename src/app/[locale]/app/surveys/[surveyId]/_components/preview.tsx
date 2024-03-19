"use client";

import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Laptop, Smartphone } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ButtonQuestion } from "./button-question";
import { Question } from "./question";
import { Option } from "./option";
import { Skeleton } from "@/components/ui/skeleton";

export function Preview() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { control } = useFormContext();

  const handleToggle = () => setIsMobile(!isMobile);

  const leftLabel = useWatch({ name: "leftLabel", control });
  const rightLabel = useWatch({ name: "rightLabel", control });

  return (
    <div className="hidden lg:flex flex-col gap-3 flex-1 justify-center items-center">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => isMobile && handleToggle()}
          className="w-12 h-12 bg-slate-100 rounded-xl flex justify-center items-center"
        >
          <Laptop />
        </button>
        <button
          type="button"
          onClick={() => !isMobile && handleToggle()}
          className="w-12 h-12 bg-slate-100 rounded-xl flex justify-center items-center"
        >
          <Smartphone />
        </button>
      </div>
      <div
        className={twMerge(
          "flex flex-col gap-3 bg-slate-100 border-[3px] duration-300 overflow-hidden px-2 py-1 justify-center items-center border-black rounded-3xl h-[538px] relative",
          isMobile ? "w-[330px]" : "w-full"
        )}
      >
        <div className="space-y-3">
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white">
          {isMobile ? <ButtonQuestion /> : <Question />}
          <div
            className={twMerge(
              "gap-2 items-center hidden p-3",
              !isMobile && "flex items-center justify-center"
            )}
          >
            <span className="text-sm">{leftLabel}</span>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
            <Option>8</Option>
            <Option>9</Option>
            <Option>10</Option>
            <span className="text-sm">{rightLabel}</span>
          </div>

          <div className="p-3 text-right">Powered By Survey Apoli</div>
        </div>
      </div>
    </div>
  );
}
