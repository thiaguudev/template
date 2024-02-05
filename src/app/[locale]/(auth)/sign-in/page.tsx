import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getServerAuthSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonSignIn from "@/components/ButtonSignIn";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default async function SignInPage() {
  const authSession = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SignIn</h1>
      {/* <Avatar>
        <AvatarImage src={authSession?.user?.image as string} alt="@shadcn" />
        <AvatarFallback>
          {authSession?.user?.name?.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar> */}
      <ButtonSignIn />
    </main>
  );
}
