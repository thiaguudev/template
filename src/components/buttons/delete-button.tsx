import { ReactNode } from "react";
import { Trash } from "iconsax-react";
import { Button } from "../ui/button";

type DeleteButtonProps = {
  children: ReactNode;
};

export default function DeleteButton({ children }: DeleteButtonProps) {
  return (
    <Button variant="destructive">
      <Trash /> {children}
    </Button>
  );
}
