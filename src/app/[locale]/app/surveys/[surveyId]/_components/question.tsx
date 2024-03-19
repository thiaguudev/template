import { useFormContext, useWatch } from "react-hook-form";

export function Question() {
  const { control } = useFormContext();
  const question = useWatch({ control, name: "question" });

  return <h1 className="text-lg text-black text-center p-3">{question}</h1>;
}
