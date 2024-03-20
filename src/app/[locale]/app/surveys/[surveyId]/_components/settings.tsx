// 469 lines before refactor
import { useFormContext } from "react-hook-form";
import {
  MessageCircleMore,
  Paintbrush2,
  Hand,
  Settings2,
  Star,
  List,
  PartyPopper,
} from "lucide-react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input as ColorPicker } from "@/components/ui/input";
import Input from "./forms/input";
import Textarea from "./forms/textarea";
import Switch from "./forms/switch";

type SettingsProps = {
  onChangeScreen: (value: string) => void;
};

export function Settings({ onChangeScreen }: SettingsProps) {
  const { control, register, watch } = useFormContext();

  const bgColor = watch("buttonBackgroundColor");

  return (
    <div className="flex flex-1 flex-col gap-2">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onValueChange={onChangeScreen}
      >
        <AccordionItem
          value="question-customization"
          className="flex hover:no-underline justify-start gap-3 flex-col"
        >
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <MessageCircleMore color="#feaaaa" /> Question Customization
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Textarea
              name="question"
              label="Question"
              placeholder="How likely are you to recommend Hem & Stitch to a friend?"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="design"
          className="flex hover:no-underline justify-start gap-3 flex-col"
        >
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Paintbrush2 color="#deceee" /> Design
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label htmlFor="hs-color-input">Primary Color</Label>
                <ColorPicker
                  type="color"
                  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
                  id="hs-color-input"
                  {...register("buttonTextColor")}
                  title="Choose your color"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="hs-color-input">Background Color</Label>
                <ColorPicker
                  type="color"
                  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
                  id="hs-color-input"
                  {...register("buttonBackgroundColor")}
                  title="Choose your color"
                />
              </div>
            </div>

            <FormField
              control={control}
              name="buttonStyle"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Button Style</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center"
                      >
                        <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14">
                          <FormControl>
                            <RadioGroupItem value="filled" className="hidden" />
                          </FormControl>
                          <FormLabel className="font-normal rounded-xl cursor-pointer">
                            <div
                              className="p-3 text-white rounded-xl"
                              style={{ backgroundColor: bgColor }}
                            >
                              10
                            </div>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14">
                          <FormControl>
                            <RadioGroupItem
                              value="outline"
                              className="hidden"
                            />
                          </FormControl>
                          <FormLabel className="font-normal rounded-xl cursor-pointer">
                            <div
                              className="p-3 border rounded-xl"
                              style={{ borderColor: bgColor, color: bgColor }}
                            >
                              10
                            </div>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={control}
              name="buttonShape"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Button Shape</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center"
                      >
                        <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14 flex items-center justify-center space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="rounded-none"
                              className="hidden"
                            />
                          </FormControl>
                          <FormLabel className="font-normal rounded-xl cursor-pointer">
                            <div
                              className="w-7 h-7 rounded-none"
                              style={{ backgroundColor: bgColor }}
                            />
                          </FormLabel>
                        </FormItem>
                        <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14 flex items-center justify-center space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="rounded-xl"
                              className="hidden"
                            />
                          </FormControl>
                          <FormLabel className="font-normal rounded-xl cursor-pointer">
                            <div
                              className="w-7 h-7 rounded-xl"
                              style={{ backgroundColor: bgColor }}
                            />
                          </FormLabel>
                        </FormItem>
                        <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14 flex items-center justify-center space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="rounded-full"
                              className="hidden"
                            />
                          </FormControl>
                          <FormLabel className="font-normal rounded-xl cursor-pointer flex justify-center items-center">
                            <div
                              className="w-7 h-7 rounded-full"
                              style={{ backgroundColor: bgColor }}
                            />
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="welcome-page">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Hand color="#aace10" /> Welcome page
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Switch
              name="showWelcomeMessage"
              label="Show Welcome Message"
              description="Remove the branding of survey apoli. Necessary Pro Plan
                        or superior."
            />
            <Textarea
              name="welcomeMessage"
              label="Welcome message"
              placeholder="Can you help us with a question?"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="remove-survey-branding">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Star color="green" /> Remove Survey branding
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Switch
              name="showSurveyBranding"
              label="Show Apoli branding"
              description="Remove the branding of survey apoli. Necessary Pro Plan
              or superior."
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="customize-labels">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <List color="#a1a224" /> Customize labels
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-3">
            <Input
              name="leftLabel"
              label="Left Label"
              placeholder="Not Likely"
            />
            <Input
              name="rightLabel"
              label="Right Label"
              placeholder="Very Likely"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="none:advanced">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Settings2 color="#cecece" /> Advanced
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Switch
              name="isMobile"
              label="Show survey on mobiles"
              description="Remove the branding of survey apoli. Necessary Pro Plan
              or superior."
            />
            <Switch
              name="skipComment"
              label="Skip comment"
              description="Remove the branding of survey apoli. Necessary Pro Plan
              or superior."
            />
            <Input
              name="timeToShow"
              label="Time to show"
              placeholder="2"
              description="Time to show a survey for your user (in seconds)"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="thank-you-page">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <PartyPopper color="#DDCCFF" /> Thank you page
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Input name="thanksTitle" label="Page title" placeholder="" />
            <Textarea
              name="thanksMessage"
              label="Message"
              placeholder="Thank you for help us!"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button type="submit" className="w-28">
        Save changes
      </Button>
    </div>
  );
}
