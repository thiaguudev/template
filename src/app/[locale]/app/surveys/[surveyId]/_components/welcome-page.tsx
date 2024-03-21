import { useFormContext, useWatch } from "react-hook-form";

export default function WelcomePage({ mobile }: any) {
  const { control } = useFormContext();

  const welcomeMessage = useWatch({ name: "welcomeMessage", control });

  return <div className="text-center">{welcomeMessage}</div>;
}
