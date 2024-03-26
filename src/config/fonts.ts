import {
  DM_Sans as FontSans,
  Bricolage_Grotesque as FontMono,
  Caveat as FontEffect,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700", "900"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["800"],
});

export const fontEffect = FontEffect({
  subsets: ['latin'],
  variable: '--font-effect',
  weight: ["700"]
})
