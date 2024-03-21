import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
};

export default function Page({ children, title, subtitle }: PageProps) {
  return (
    <div className="p-5 flex flex-col py-5">
      {title && (
        <div className="flex flex-col text-center md:text-start mb-5">
          <h1 className="text-2xl mb-3 text-primary font-black">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      )}
      {children}
    </div>
  );
}
