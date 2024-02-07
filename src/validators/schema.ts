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
