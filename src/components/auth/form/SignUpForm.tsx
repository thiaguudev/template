"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver as resolver } from "@hookform/resolvers/zod";
import { Star1 } from "iconsax-react";

import ButtonSignInGoogle from "@/components/ButtonSignInGoogle";
import Input from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "@/navigation";

export default function SignUpForm() {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: resolver(schema),
  });

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) => {
    console.log(d);
  };

  return (
    <div className="flex flex-col w-full sm:max-w-xs md:max-w-sm gap-3 p-5">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Link href="/" className="block" aria-label="Survey Apoli">
          <div className="h-10 outline outline-emerald-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-emerald-500 to-emerald-600 text-white">
            <Star1
              size={24}
              className="relative group-hover:scale-110 duration-200"
            />
          </div>
        </Link>
        <h4 className="font-bold text-xl">Welcome to Survey Apoli</h4>
        <p className="text-muted-foreground">
          Survey Apoli helps you start collecting, managing and sharing your
          surveys in minutes, not days.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-3"
        >
          <Input name="email" label="Email" placeholder="Enter your email" />
          <Input name="password" label="Password" placeholder="********" />
          <Button type="submit">Sign up</Button>
          <ButtonSignInGoogle>Sign up with Google</ButtonSignInGoogle>
          <div className="flex gap-1 items-center justify-center">
            <span>You have an account?</span>{" "}
            <Link href="/sign-in" className="text-primary">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
