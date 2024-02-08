import {
  NextAuthOptions,
  getServerSession,
  DefaultSession,
  DefaultUser,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";
import { env } from "./env";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: env.SECRET_KEY,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture;
      return session;
    },
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

      if (user) token.id = user.id;

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
