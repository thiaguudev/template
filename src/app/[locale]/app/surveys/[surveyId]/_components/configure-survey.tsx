"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver as resolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { schema } from "@/validators/survey";
import { Link } from "@/navigation";
import SurveyBuilder from "./survey-builder";

export default function ConfigureSurvey() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
    defaultValues: async () => {
      const response = await fetch("/api/surveys");
      const values = await response.json();
      return values;
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    toast({
      title: "Successfully",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(d, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <Link href="/app/surveys">Surveys</Link>
      </div>
      <div className="flex gap-3 h-full">
        <Form {...form}>
          <div className="flex-1 p-3 h-full">
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex gap-8 items-start"
            >
              <SurveyBuilder />
            </form>
          </div>
        </Form>
      </div>
    </>
  );
}
