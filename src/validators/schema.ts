import { z } from "zod";

export const userAuth = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type UserAuth = z.infer<typeof userAuth>;

export const userAuthRecoveryPassword = z.object({
  email: z.string().email(),
});

export type UserAuthRecoveryPassword = z.infer<typeof userAuthRecoveryPassword>;

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

export const senderEmail = z.object({
  username: z.string(),
  email: z.string().email(),
});

export type SenderEmail = z.infer<typeof senderEmail>;
