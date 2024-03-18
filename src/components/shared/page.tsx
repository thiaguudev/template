import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return <div className="p-5">{children}</div>;
}
