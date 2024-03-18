"use client";

import {
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { zodResolver as resolver } from "@hookform/resolvers/zod";

import z from "zod";

import Page from "@/components/shared/page";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type SurveyProps = {
  params: {
    surveyId: string;
  };
};

function Button({ children }: any) {
  const { control } = useFormContext();
  const bgColor = useWatch({ control, name: "color" });
  const buttonStyle = useWatch({ control, name: "buttonStyle" });
  const buttonShape = useWatch({ control, name: "buttonShape" });

  return (
    <button
      className={`p-3 text-black w-12 border-2 ${buttonShape}`}
      style={{
        backgroundColor: buttonStyle === "filled" ? bgColor : "white",
        borderColor: bgColor,
        color: buttonStyle === "filled" ? "white" : bgColor,
      }}
    >
      {children}
    </button>
  );
}

function Question() {
  const { control } = useFormContext();
  const question = useWatch({ control, name: "question" });

  return <h1 className="text-lg text-black">{question}</h1>;
}

export default function Survey({ params }: SurveyProps) {
  const schema = z.object({
    question: z.string().min(1),
    color: z.string().min(1),
    buttonStyle: z.enum(["filled", "outline"]),
    buttonShape: z.enum(["rounded-none", "rounded-lg", "rounded-full"]),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
    defaultValues: {
      question: "How likely are you to recommend Hem & Stitch to a friend?",
      // color: "#deceee",
      color: "#deceee",
      buttonStyle: "outline",
      buttonShape: "rounded-lg",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    console.log(d);
  };

  return (
    <Page>
      <div className="flex gap-3 h-full">
        <Form {...form}>
          <div className="flex-1 p-3 h-full">
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-2.5"
            >
              <Textarea
                className="w-full"
                placeholder="How likely are you to recommend Hem & Stitch to a friend?"
                {...form.register("question")}
              />

              <div className="flex flex-col gap-1">
                <Label htmlFor="hs-color-input">Brand color</Label>
                <Input
                  type="color"
                  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
                  id="hs-color-input"
                  {...form.register("color")}
                  title="Choose your color"
                />
              </div>

              <FormField
                control={form.control}
                name="buttonStyle"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="filled" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Filled
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="outline" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              outline
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="buttonShape"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="rounded-none" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              rounded-none
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="rounded-lg" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              rounded-lg
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="rounded-full" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              rounded-full
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <div className="flex flex-col flex-1 p-3 h-full gap-3 items-center justify-center bg-slate-50 rounded-xl">
                <Question />
                <div className="flex gap-3 items-center">
                  <Label>Not Likely</Label>
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                  <Button>8</Button>
                  <Button>9</Button>
                  <Button>10</Button>
                  <Label>Very Likely</Label>
                </div>
              </div>
            </form>
          </div>
        </Form>
      </div>
    </Page>
  );
}
