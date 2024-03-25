import { ReactNode } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  MessageCircleMore,
  Paintbrush2,
  Hand,
  Settings2,
  Star,
  List,
  PartyPopper,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input as ColorPicker } from "@/components/ui/input";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import Textarea from "@/components/form/textarea";
import RadioGroup from "@/components/form/radio-group";
import Checkbox from "@/components/form/checkbox";
import Input from "@/components/form/input";

type SettingsProps = {
  onChangeScreen: (value: string) => void;
};

type AccordionTitleProps = {
  icon: ReactNode;
  title: string;
};

function AccordionTitle({ icon, title }: AccordionTitleProps) {
  return (
    <div className="flex items-center gap-2">
      {icon} {title}
    </div>
  );
}

export function Settings({ onChangeScreen }: SettingsProps) {
  const { control, register } = useFormContext();

  const backgroundColor = useWatch({ name: "buttonBackgroundColor", control });

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
            <AccordionTitle
              title="Question Customization"
              icon={<MessageCircleMore color="#feaaaa" />}
            />
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
            <AccordionTitle
              title="Design"
              icon={<Paintbrush2 color="#deceee" />}
            />
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

            <RadioGroup
              name="buttonShape"
              label="Button Shape"
              className="flex items-center"
              render={() => {
                return (
                  <>
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
                          style={{ backgroundColor }}
                        />
                      </FormLabel>
                    </FormItem>
                    <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14 flex items-center justify-center space-y-0">
                      <FormControl>
                        <RadioGroupItem value="rounded-xl" className="hidden" />
                      </FormControl>
                      <FormLabel className="font-normal rounded-xl cursor-pointer">
                        <div
                          className="w-7 h-7 rounded-xl"
                          style={{ backgroundColor }}
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
                          style={{ backgroundColor }}
                        />
                      </FormLabel>
                    </FormItem>
                  </>
                );
              }}
            />

            <RadioGroup
              name="buttonStyle"
              label="Button Style"
              className="flex items-center"
              render={() => {
                return (
                  <>
                    <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14">
                      <FormControl>
                        <RadioGroupItem value="filled" className="hidden" />
                      </FormControl>
                      <FormLabel className="font-normal rounded-xl cursor-pointer">
                        <div
                          className="p-3 text-white rounded-xl"
                          style={{ backgroundColor: backgroundColor }}
                        >
                          10
                        </div>
                      </FormLabel>
                    </FormItem>
                    <FormItem className="p-2 rounded-xl cursor-pointer border border-primary w-14 h-14">
                      <FormControl>
                        <RadioGroupItem value="outline" className="hidden" />
                      </FormControl>
                      <FormLabel className="font-normal rounded-xl cursor-pointer">
                        <div
                          className="p-3 border rounded-xl"
                          style={{
                            borderColor: backgroundColor,
                            color: backgroundColor,
                          }}
                        >
                          10
                        </div>
                      </FormLabel>
                    </FormItem>
                  </>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="welcome-page">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <AccordionTitle
              title="Welcome page"
              icon={<Hand color="#aace10" />}
            />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Checkbox
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
            <AccordionTitle
              title="Remove Survey branding"
              icon={<Star color="green" />}
            />
          </AccordionTrigger>
          <AccordionContent>
            <Checkbox
              name="showSurveyBranding"
              label="Show Apoli branding"
              description="Remove the branding of survey apoli. Necessary Pro Plan
              or superior."
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="customize-labels">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <AccordionTitle
              title="Customize labels"
              icon={<List color="#a1a224" />}
            />
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
            <AccordionTitle
              title="Advanced"
              icon={<Settings2 color="#cecece" />}
            />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <Checkbox
              name="isMobile"
              label="Show survey on mobiles"
              description="Controls whether the survey should be shown on smartphones and tablets. The mobile experience has been specifically designed for touchscreens."
            />
            <Checkbox
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
            <AccordionTitle
              title="Thank you page"
              icon={<PartyPopper color="#DDCCFF" />}
            />
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
