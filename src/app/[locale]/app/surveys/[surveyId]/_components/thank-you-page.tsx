import { useFormContext, useWatch } from "react-hook-form";

export default function ThankYouPage({ mobile }: any) {
  const { control } = useFormContext();

  const thanksTitle = useWatch({ name: "thanksTitle", control });
  const thanksMessage = useWatch({ name: "thanksMessage", control });

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl">{thanksTitle}</h3>
      <div>{thanksMessage}</div>
    </div>
  );
}
