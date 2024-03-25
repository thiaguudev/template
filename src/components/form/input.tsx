import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input as InputField } from "@/components/ui/input";
import Field from "./field";

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
};

export default function Input({
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
              <InputField
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
