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
import { buttonVariants } from "./ui/button";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
  const getSurveyType = (type: CardSurveyProps["type"]) => {
    let className = "bg-gray-500";

    if (type === "NPS") className = "bg-emerald-500";
    else if (type === "CSAT") className = "bg-red-500";
    else if (type === "CES") className = "bg-yellow-500";

    return <Badge className={className}>{type}</Badge>;
  };

  const chart = {
    series: [215, 600, 286],
    options: {
      legend: { show: false },
      dataLabels: { enabled: false },
      fill: { colors: ["#7FD320", "#9B9B9B", "#FF0054"] },
      // labels: ["Promoters", "Neutrals", "Detractors"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "75%",
            labels: {
              show: true,
              name: { show: false },
              total: {
                show: true,
                showAlways: true,
                formatter: function (w: any) {
                  // const totals = w.globals.seriesTotals;
                  // const result = totals.reduce((a: any, b: any) => a + b, 0);
                  // return (result / 1000).toFixed(3);
                  return String(quantity);
                },
              },
            },
          },
        },
      },
    } as ApexCharts.ApexOptions,
  };

  return (
    <Link href="/#">
      <Card className="group hover:border p-3 hover:border-primary hover:scale-105">
        <CardHeader className="p-1">
          <div className="flex justify-between flex-row">
            <div className="p-3 flex flex-col grow">
              <CardTitle className="flex gap-3 items-center">
                {name} {getSurveyType(type)}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>

            <ApexChart
              type="donut"
              options={chart.options}
              series={chart.series}
              height={100}
              width={65}
            />
          </div>
        </CardHeader>

        <CardFooter className="flex justify-center items-center p-1">
          <Link
            href={""}
            className={cn(
              buttonVariants(),
              "hover:bg-foreground hover:text-background"
            )}
          >
            View Analytics
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}
