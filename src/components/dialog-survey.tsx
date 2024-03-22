"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver as resolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/navigation";
import Input from "@/app/[locale]/app/surveys/[surveyId]/_components/forms/input";
import { faker } from "@faker-js/faker";

type DialogSurveyProps = {
  open: boolean;
  onOpenChange: any;
};

export function DialogSurvey({ open, onOpenChange }: DialogSurveyProps) {
  const { toast } = useToast();
  const router = useRouter();

  const schema = z.object({
    title: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
  });

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    const surveyId = faker.string.uuid();

    toast({
      title: "Successfully to create a survey",
      description: JSON.stringify(d),
      variant: "success",
    });

    router.push(`/app/surveys/${surveyId}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-w-[350px] w-full bg-background rounded-xl">
        <DialogHeader>
          <DialogTitle>Create a Survey</DialogTitle>
          <DialogDescription>
            You can create different surveys to collect different kpi
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Input name="title" label="Survey name" />
            <DialogFooter className="sm:flex flex-col-reverse gap-1 mt-3">
              <Button type="submit">Create Survey</Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
