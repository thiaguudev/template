import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch as SwitchField } from "@/components/ui/switch";

type SwitchProps = { name: string; label: string; description?: string };

export default function Switch({ name, label, description }: SwitchProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-row items-center gap-3 p-3 border border-black rounded-xl space-y-0">
            <FormControl>
              <SwitchField
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
