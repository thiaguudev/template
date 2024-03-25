import { useFormContext } from "react-hook-form";

import { FormField } from "@/components/ui/form";

type FieldProps = {
  name: string;
  render: ({ field }: any) => JSX.Element;
};

export default function Field({ name, render }: FieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => render({ field })}
    />
  );
}
