import { useFormContext, useWatch } from "react-hook-form";

export default function ThankYouPage({ mobile }: any) {
  const { control } = useFormContext();

  const thanksMessage = useWatch({ name: "thanksMessage", control });
  return <div>{thanksMessage}</div>;
}
