"use client";

import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserAuthSchema, userAuthSchema } from "@/validators/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import ButtonSignIn from "@/components/ButtonSignIn";

export default function SignUpForm() {
  const form = useForm<UserAuthSchema>({
    resolver: zodResolver(userAuthSchema),
  });

  const t = useTranslations("Auth");

  const handleOnSubmit: SubmitHandler<UserAuthSchema> = async (d) => {
    console.log("d", d);
  };

  return (
    <Card className="flex flex-col w-[350px]">
      <CardHeader>
        <CardTitle className="text-xl">{t("signUp")}</CardTitle>
        <CardDescription>
          {t("signUpWelcome")} {siteConfig.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleOnSubmit)}
            className="grid w-full items-center gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {t("signUp")}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center flex-col gap-3">
        <ButtonSignIn>{t("signUpWithGoogle")}</ButtonSignIn>
        <Link href="/sign-in" className="text-center text-sm">
          {t("haveAccount")} <span>{t("signIn")}</span>
        </Link>
      </CardFooter>
    </Card>
  );
}