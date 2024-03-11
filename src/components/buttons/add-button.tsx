import { ReactNode } from "react";
import { Add } from "iconsax-react";
import { Button } from "../ui/button";

type AddButtonProps = {
  children: ReactNode;
};

export default function AddButton({ children }: AddButtonProps) {
  return (
    <Button className="rounded-xl">
      <Add /> {children}
    </Button>
  );
}
