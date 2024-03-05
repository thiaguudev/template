import Link from "next/link";

import { Icons } from "@/components/shared/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import UserNav from "@/components/UserNav";
import ButtonSignInFacebook from "@/components/ButtonSignInFacebook";
import { HeroForm } from "@/components/Hero";

export default async function LandingPage() {
  const session = true;
  return (
    <main>
      <header className="w-full border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold">
            next-starter
          </Link>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            {session && <UserNav />}
          </div>
        </div>
      </header>
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Next.js starter template
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          A Next.js starter template, packed with features like TypeScript,
          Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart
          your project with efficiency and style.
        </p>
        <div className="mt-1">
          <HeroForm />
        </div>
        <div className="mt-2 flex gap-4">
          <Button asChild>
            <a
              href="https://github.com/Skolaczk/next-starter/blob/main/README.md#getting-started"
              target="_blank"
            >
              Get Started
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/Skolaczk/next-starter" target="_blank">
              <Icons.gitHub className="mr-2 size-4" /> Github
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
