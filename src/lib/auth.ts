import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";
import { env } from "./env";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: env.SECRET_KEY,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, trigger, user }) {
      if (trigger === "signUp") {
        fetch(`${env.VERCEL_URL}/api/email`, {
          method: "POST",
          body: JSON.stringify({
            username: user.name,
            to: user.email,
          }),
        });
      }
      return token;
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
