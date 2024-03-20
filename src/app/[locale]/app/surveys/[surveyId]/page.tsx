"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver as resolver } from "@hookform/resolvers/zod";

import Page from "@/components/shared/page";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import SurveyBuilder from "./_components/survey-builder";
import { useEffect } from "react";

type SurveyProps = {
  params: {
    surveyId: string;
  };
};

export default function Survey({ params }: SurveyProps) {
  const { toast } = useToast();

  const schema = z.object({
    question: z.string(),
    buttonBackgroundColor: z.string(),
    buttonTextColor: z.string(),
    buttonStyle: z.enum(["filled", "outline"]),
    buttonShape: z.enum(["rounded-none", "rounded-xl", "rounded-full"]),
    welcomeMessage: z.string(),
    thanksMessage: z.string(),
    leftLabel: z.string(),
    rightLabel: z.string(),
    timeToShow: z.string(),
    showSurveyBranding: z.boolean(),
    showWelcomeMessage: z.boolean(),
    isMobile: z.boolean(),
    skipComment: z.boolean(),
    type: z.enum(["nps", "ces", "csat", "custom"]),
    thanksTitle: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
    defaultValues: {
      type: "nps",
      question: "How likely are you to recommend Survey Apoli to a friend?",
      buttonTextColor: "#deceee",
      buttonBackgroundColor: "#deceee",
      buttonStyle: "outline",
      leftLabel: "Not Likely",
      rightLabel: "Very Likely",
      timeToShow: 2,
      isMobile: true,
      skipComment: false,
      buttonShape: "rounded-xl",
      welcomeMessage: "Can you help us with a question?",
      thanksTitle: "Thank you 🙏",
      thanksMessage: "Thank you for help us.",
      showSurveyBranding: true,
      showWelcomeMessage: true,
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
    <Page>
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
    </Page>
  );
}
