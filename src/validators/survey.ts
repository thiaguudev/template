import z from 'zod';

export const schema = z.object({
  question: z.string(),
  buttonBackgroundColor: z.string(),
  buttonTextColor: z.string(),
  buttonStyle: z.enum(["filled", "outline"]),
  buttonShape: z.enum(["rounded-none", "rounded-xl", "rounded-full"]),
  welcomeMessage: z.string(),
  thanksMessage: z.string(),
  leftLabel: z.string(),
  rightLabel: z.string(),
  timeToShow: z.string(),
  showSurveyBranding: z.boolean(),
  showWelcomeMessage: z.boolean(),
  isMobile: z.boolean(),
  skipComment: z.boolean(),
  type: z.enum(["nps", "ces", "csat", "custom"]),
  thanksTitle: z.string(),
});