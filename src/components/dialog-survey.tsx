"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "@/navigation";

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

  const form = useForm<z.infer<typeof schema>>();

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    const surveyId = "x12463";

    toast({
      title: "Successfully to create a survey",
      description: "",
      variant: "default",
    });

    router.push(`/surveys/${surveyId}`);
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
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="title">Survey name</Label>
                <Input id="title" {...form.register("title")} />
              </div>
            </div>
            <DialogFooter className="sm:flex flex-col-reverse gap-1">
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
