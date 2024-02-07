import "dotenv/config";
import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
  STRIPE_API_KEY: str(),
  SECRET_KEY: str(),
  RESEND_API_KEY: str(),
  FROM_EMAIL: str(),
  NEXT_PUBLIC_CHAT_ID: str(),
  NEXT_PUBLIC_HOTJAR_SITE_ID: str(),
  VERCEL_URL: str({ default: "http://localhost:3000 " }),
});
