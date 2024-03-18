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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "@/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";

type DialogSurveyProps = {
  open: boolean;
  onOpenChange: any;
};

export function DialogSurvey({ open, onOpenChange }: DialogSurveyProps) {
  const { toast } = useToast();
  const router = useRouter();

  const schema = z.object({
    title: z.string().min(8),
    type: z.string().min(1),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
  });

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    const surveyId = "x12463";

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
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="title">Survey name</Label>
                <Input id="title" {...form.register("title")} />
              </div>
            </div>
            <FormField
              name="type"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      What kind of feedback would you like to get?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="nps" />
                          </FormControl>
                          <FormLabel className="font-normal">NPS</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="ces" />
                          </FormControl>
                          <FormLabel className="font-normal">CES</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="csat" />
                          </FormControl>
                          <FormLabel className="font-normal">CSAT</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="custom" />
                          </FormControl>
                          <FormLabel className="font-normal">Custom</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
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
