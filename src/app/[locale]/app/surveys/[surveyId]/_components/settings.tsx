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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircleMore,
  Paintbrush2,
  Hand,
  Settings2,
  Star,
  List,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export function Settings() {
  const { control, register, watch } = useFormContext();

  const bgColor = watch("buttonBackgroundColor");

  return (
    <div className="flex flex-1 flex-col gap-2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-1"
          className="flex hover:no-underline justify-start gap-3 flex-col"
        >
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <MessageCircleMore color="#feaaaa" /> Question Customization
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <FormField
              name="question"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full"
                        placeholder="How likely are you to recommend Hem & Stitch to a friend?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
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
                <Input
                  type="color"
                  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700"
                  id="hs-color-input"
                  {...register("buttonTextColor")}
                  title="Choose your color"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="hs-color-input">Background Color</Label>
                <Input
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
        <AccordionItem value="item-3">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Hand color="#aace10" /> Welcome page
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <FormField
              name="showWelcomeMessage"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-center gap-3 p-3 border border-black rounded-xl space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0.5">
                      <FormLabel>Show Welcome Message</FormLabel>
                      <FormDescription>
                        Remove the branding of survey apoli. Necessary Pro Plan
                        or superior.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
            <FormField
              name="welcomeMessage"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Welcome message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full"
                        placeholder="Can you help us with a question?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Star color="green" /> Remove Survey branding
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <FormField
              name="showSurveyBranding"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-center gap-3 p-3 border border-black rounded-xl space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0.5">
                      <FormLabel>Show Apoli branding</FormLabel>
                      <FormDescription>
                        Remove the branding of survey apoli. Necessary Pro Plan
                        or superior.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <List color="#a1a224" /> Customize labels
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-3">
            <FormField
              name="leftLabel"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Left Label</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Not Likely" />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              name="rightLabel"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Right Label</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Very Likely" />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="flex hover:no-underline justify-between gap-3 [&[data-state=open]>svg]:rotate-0 [&[data-state=open]]:opacity-70">
            <div className="flex items-center gap-2">
              <Settings2 color="#cecece" /> Advanced
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <FormField
              name="isMobile"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-center gap-3 p-3 border border-black rounded-xl space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0.5">
                      <FormLabel>Show survey on mobiles</FormLabel>
                      <FormDescription>
                        Remove the branding of survey apoli. Necessary Pro Plan
                        or superior.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
            <FormField
              name="skipComment"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-center gap-3 p-3 border border-black rounded-xl space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-0.5">
                      <FormLabel>Skip comment</FormLabel>
                      <FormDescription>
                        Remove the branding of survey apoli. Necessary Pro Plan
                        or superior.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
            <FormField
              name="timeToShow"
              control={control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Time to show</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="2" />
                    </FormControl>
                    <FormDescription>
                      Time to show a survey for your user (in seconds)
                    </FormDescription>
                  </FormItem>
                );
              }}
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
