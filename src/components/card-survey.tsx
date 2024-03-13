import { Copy, Edit2, Link, Pause, Trash } from "iconsax-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CardSurveyProps = {
  name: string;
  type: "NPS" | "CES" | "CSAT" | "Custom";
  description?: string;
  quantity: number;
};

export default function CardSurvey({
  name,
  type,
  description,
  quantity,
}: CardSurveyProps) {
  return (
    <Card className="group hover:bg-primary hover:text-white p-3">
      <CardHeader className="p-1">
        <CardTitle className="flex gap-3 items-center">
          {name} <Badge>{type}</Badge>
        </CardTitle>
        <CardDescription className="flex justify-between mt-3 gap-3 h-full max-h-[150px] overflow-hidden text-ellipsis">
          {description}
          <div className="text-center">
            <span className="font-black text-2xl block">{quantity}</span>
            responses
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="hidden md:flex gap-2 p-1">
        <Button variant="secondary" className="flex gap-1">
          <Edit2 size={16} />
          Edit
        </Button>

        <Button variant="secondary" className="flex gap-1">
          <Link size={16} /> Share
        </Button>

        <Button variant="secondary" className="flex gap-1">
          <Copy size={16} /> Copy
        </Button>

        <Button variant="secondary" className="flex gap-1">
          <Pause size={16} /> Pause
        </Button>

        <Button variant="destructive" className="flex gap-1">
          <Trash size={16} /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
