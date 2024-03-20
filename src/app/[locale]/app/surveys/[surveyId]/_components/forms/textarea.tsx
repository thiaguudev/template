import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea as TextareaField } from "@/components/ui/textarea";

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
};

export default function Textarea({
  name,
  label,
  placeholder,
  description,
}: InputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <TextareaField
                className="w-full"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
}
