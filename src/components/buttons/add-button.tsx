import { ReactNode } from "react";
import { Add } from "iconsax-react";

import { Button } from "../ui/button";

type AddButtonProps = {
  children: ReactNode;
  onClick: any;
};

export default function AddButton({ children, onClick }: AddButtonProps) {
  return (
    <Button className="rounded-xl" onClick={onClick}>
      <Add /> {children}
    </Button>
  );
}
