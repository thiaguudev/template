import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea as TextareaField } from "@/components/ui/textarea";
import Field from "./field";

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
  return (
    <Field
      name={name}
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
