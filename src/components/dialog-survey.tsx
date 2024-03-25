"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver as resolver } from "@hookform/resolvers/zod";
import { faker } from "@faker-js/faker";

import { prisma } from "@/lib/prisma";
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
import Input from "./form/input";

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
    const type = faker.helpers.arrayElement(["nps"]);

    const survey = await prisma.survey.create({
      data: { title: d.title, type },
    });

    toast({
      title: "Successfully to create a survey",
      description: "Continue configuring your survey",
    });

    console.log(survey);

    router.push(`/app/surveys/${survey.id}/type/${type}/select-platform`);
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
