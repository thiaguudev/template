"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Skeleton } from "@/components/ui/skeleton";
import SurveyPage from "./survey-page";
import ThankYouPage from "./thank-you-page";
import WelcomePage from "./welcome-page";

type PreviewProps = {
  screen: string;
};

export function Preview({ screen }: PreviewProps) {
  const [mobile, setMobile] = useState<boolean>(false);

  const handleToggle = () => setMobile(!mobile);

  const getScreen = () => {
    if (
      [
        "question-customization",
        "design",
        "customize-labels",
        "remove-survey-branding",
      ].includes(screen)
    ) {
      return <SurveyPage mobile={mobile} />;
    } else if (screen === "welcome-page") {
      return <WelcomePage mobile={mobile} />;
    } else if (screen === "thank-you-page") {
      return <ThankYouPage mobile={mobile} />;
    }
  };

  return (
    <div className="hidden lg:flex flex-col gap-3 flex-1 justify-center items-center">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => mobile && handleToggle()}
          className="w-28 h-12 bg-slate-100 rounded-xl flex justify-center items-center"
        >
          Web preview
        </button>
        <button
          type="button"
          onClick={() => !mobile && handleToggle()}
          className="w-28 h-12 bg-slate-100 rounded-xl flex justify-center items-center"
        >
          Mobile preview
        </button>
      </div>
      <div
        className={twMerge(
          "flex flex-col gap-3 bg-slate-100 border-[3px] duration-300 overflow-hidden px-2 py-1 justify-center items-center border-black rounded-3xl h-[538px] relative",
          mobile ? "w-[330px]" : "w-full"
        )}
      >
        <div className="space-y-3">
          <Skeleton
            className={twMerge("h-[100px]", mobile ? "w-[300px]" : "w-[500px]")}
          />
          <Skeleton
            className={twMerge("h-[100px]", mobile ? "w-[300px]" : "w-[500px]")}
          />
          <Skeleton
            className={twMerge("h-[100px]", mobile ? "w-[300px]" : "w-[500px]")}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white">
          {getScreen()}
        </div>
      </div>
    </div>
  );
}
