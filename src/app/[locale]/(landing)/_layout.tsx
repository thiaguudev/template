import { ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  console.log("yes");
  return children;
}
