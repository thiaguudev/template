"use client";

import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  userAuthRecoveryPassword,
  UserAuthRecoveryPassword,
} from "@/validators/schema";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "@/navigation";
import ButtonCancel from "@/components/ButtonCancel";

export default function RecoveryPasswordForm() {
  const router = useRouter();
  const t = useTranslations("Auth");

  const form = useForm<UserAuthRecoveryPassword>({
    resolver: zodResolver(userAuthRecoveryPassword),
  });

  const handleOnSubmit: SubmitHandler<UserAuthRecoveryPassword> = async (d) => {
    console.log("✔", d);
  };

  return (
    <Card className="flex flex-col w-[350px]">
      <CardHeader>
        <CardTitle>{t("recoveryPassword")}</CardTitle>
        <CardDescription>{t("recoveryPasswordDescription")}</CardDescription>
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
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <ButtonCancel />
        <Button className="flex-1" type="submit">
          {t("recoveryPasswordSendEmail")}
        </Button>
      </CardFooter>
    </Card>
  );
}
