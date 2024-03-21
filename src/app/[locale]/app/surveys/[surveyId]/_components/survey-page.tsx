import { useFormContext, useWatch } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { ButtonQuestion } from "./button-question";
import { Question } from "./question";
import { Option } from "./option";

export default function SurveyPage({ mobile }: any) {
  const { control } = useFormContext();

  const leftLabel = useWatch({ name: "leftLabel", control });
  const rightLabel = useWatch({ name: "rightLabel", control });
  const showSurveyBranding = useWatch({ name: "showSurveyBranding", control });

  return (
    <>
      {mobile ? <ButtonQuestion /> : <Question />}
      <div
        className={twMerge(
          "gap-2 items-center hidden p-3",
          !mobile && "flex items-center justify-center"
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

      {showSurveyBranding && (
        <a
          className="p-1 text-xs ml-auto block text-right text-muted-foreground"
          href="http://localhost:3000"
          target="_blank"
        >
          Powered By Survey Apoli
        </a>
      )}
    </>
  );
}
