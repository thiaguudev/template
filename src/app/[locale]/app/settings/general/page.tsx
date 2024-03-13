"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import { Link } from "@/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export default function GeneralSettings() {
  const { toast } = useToast();

  const schema = z.object({
    email: z.string().email(),
    notifications: z.boolean(),
  });

  const form = useForm<z.infer<typeof schema>>({});

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = (d) => {
    toast({
      title: "Submitting form",
      description: JSON.stringify(d, null, 2),
    });
  };

  return (
    <div className="p-5">
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-2xl mb-3 text-primary font-black">
          General Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="mt-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className="grid w-full max-w-sm items-center gap-2 mb-5">
                    <FormLabel>Change email address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="notifications"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Use different settings for my mobile devices
                      </FormLabel>
                      <FormDescription>
                        You can manage your mobile notifications in the{" "}
                        <Link href="/examples/forms">mobile settings</Link>{" "}
                        page.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
            <Button type="submit">Save Changes</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
