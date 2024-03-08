import { ArrowDown2, ArrowUp2 } from "iconsax-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardAnalyticsProps = {
  title: string;
  icon: any;
  value: number;
  difference: number;
  today: number;
};

export default function CardAnalytics({
  title,
  icon,
  value,
  difference,
  today,
}: CardAnalyticsProps) {
  return (
    <Card className="p-2 shadow-2xl">
      <CardHeader className="p-2">
        <CardTitle>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{title}</span>
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-3xl p-2">{value}</CardContent>
      <CardFooter className="text-muted-foreground text-sm flex gap-2 p-2">
        <span className="flex gap-1 items-center text-green-400">
          {difference}%{" "}
          {difference > 0 ? <ArrowUp2 width={6} /> : <ArrowDown2 width={6} />}
        </span>
        +{today} votes today
      </CardFooter>
    </Card>
  );
}
