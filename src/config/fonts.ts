// export { GeistSans as fontSans } from "geist/font/sans";
// import { Outfit as FontSans } from "next/font/google";
import { Bricolage_Grotesque as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
