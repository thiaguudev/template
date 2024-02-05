import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
  STRIPE_API_KEY: str(),
  SECRET_KEY: str(),
});
