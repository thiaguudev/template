import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox as CheckboxField } from "@/components/ui/checkbox";

type CheckboxProps = { name: string; label: string; description?: string };

export default function Checkbox({ name, label, description }: CheckboxProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-row items-center gap-3 p-3 rounded-xl space-y-0">
            <FormControl>
              <CheckboxField
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-0.5">
              <FormLabel>{label}</FormLabel>
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </FormItem>
        );
      }}
    />
  );
}
