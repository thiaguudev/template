import { z } from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;

export const userAuthRecoveryPasswordSchema = z.object({
  email: z.string().email(),
});

export type UserAuthRecoveryPasswordSchema = z.infer<
  typeof userAuthRecoveryPasswordSchema
>;

export const customerStripe = z.object({
  email: z.string().email(),
  name: z.string(),
  shipping: z.object({
    line1: z.string(),
  }),
  address: z.object({
    city: z.string(),
    country: z.string(),
    line1: z.string(),
    postal_code: z.string(),
    state: z.string(),
  }),
});

export type CustomerStripe = z.infer<typeof customerStripe>;
