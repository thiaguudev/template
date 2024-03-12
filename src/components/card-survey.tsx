import { Copy, Edit2, Link, Pause, Trash } from "iconsax-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

type CardSurveyProps = {
  name: string;
  status?: number;
  type: "NPS" | "CES" | "CSAT" | "Custom";
  description?: string;
};

export default function CardSurvey({
  name,
  type,
  description,
  status,
}: CardSurveyProps) {
  function getStatus(status: number) {
    switch (status) {
      case 1:
        return "Analyze the results";
      case 2:
        return "Continue editing";
    }
  }

  return (
    <Card className="group hover:bg-primary hover:text-white p-3">
      <CardHeader className="p-1">
        <CardTitle className="flex justify-between items-center">
          {name} <Badge>{type}</Badge>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2 p-1">
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
