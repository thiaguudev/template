import { useFormContext, useWatch } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function ButtonQuestion() {
  const { control } = useFormContext();
  const question = useWatch({ control, name: "question" });
  const color = useWatch({ control, name: "buttonBackgroundColor" });

  return (
    <button
      className={twMerge("text-lg text-black text-center p-3 w-full")}
      style={{ backgroundColor: color }}
    >
      {question}
    </button>
  );
}
