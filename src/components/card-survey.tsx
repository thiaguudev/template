"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import DropdownMenuCard from "./dropdown-menu-card";

type CardSurveyProps = {
  id: string;
  title: string;
  type: string;
  description?: string;
  status: number;
};

export default function CardSurvey({
  id,
  title,
  type,
  description,
  status,
}: CardSurveyProps) {
  const getSurveyType = (type: CardSurveyProps["type"]) => {
    let className = "bg-gray-500";

    if (type === "nps") className = "bg-emerald-500";
    else if (type === "csat") className = "bg-red-500";
    else if (type === "ces") className = "bg-yellow-500";

    return <Badge className={className}>{type.toUpperCase()}</Badge>;
  };

  return (
    <Link href={`/app/surveys/${id}/dashboard/${type}`}>
      <Card className="group hover:outline hover:outline-1 hover:outline-primary px-3 pt-3 hover:border-primary max-h-[220px] h-full flex flex-col justify-between">
        <CardHeader className="p-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col grow p-3 gap-3">
              <CardTitle className="flex justify-between items-center gap-3">
                {title} {getSurveyType(type)}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardFooter className="flex justify-between items-center mt-3 p-3 border-t border-foreground">
          <Badge
            className={cn(
              "text-white max-w-20 w-full text-center",
              status ? "bg-emerald-500" : "bg-red-500"
            )}
          >
            <span className="block w-full capitalize">{status}</span>
          </Badge>
          <DropdownMenuCard />
        </CardFooter>
      </Card>
    </Link>
  );
}
