import { useFormContext, useWatch } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  RadioGroup as RadioGroupField,
  RadioGroupItem as RadioGroupItemField,
} from "@/components/ui/radio-group";

type RadioGroupProps = {
  name: string;
  label: string;
  className?: string;
  render: any;
};

export default function RadioGroup({
  name,
  label,
  className,
  render,
}: RadioGroupProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <RadioGroupField
                onValueChange={field.onChange}
                defaultValue={field.value}
                className={className}
              >
                {render()}
              </RadioGroupField>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
}
