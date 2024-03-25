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
import Page from "@/components/shared/page";

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
    <Page>
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
          />
        </Form>
      </div>
    </Page>
  );
}
