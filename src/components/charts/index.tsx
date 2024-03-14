"use client";

import { Laugh } from "lucide-react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { SparkLineChart } from "@tremor/react";

type ChartProps = {
  title: string;
  quantity: number;
};

const chartdata = [
  {
    month: "Jan 21",
    Performance: 4000,
    Benchmark: 3000,
  },
  {
    month: "Feb 21",
    Performance: 3000,
    Benchmark: 2000,
  },
  {
    month: "Mar 21",
    Performance: 2000,
    Benchmark: 1700,
  },
  {
    month: "Apr 21",
    Performance: 2780,
    Benchmark: 2500,
  },
  {
    month: "May 21",
    Performance: 1890,
    Benchmark: 1890,
  },
  {
    month: "Jun 21",
    Performance: 2390,
    Benchmark: 2000,
  },
  {
    month: "Jul 21",
    Performance: 3490,
    Benchmark: 3000,
  },
];

export function Chart({ title, quantity }: ChartProps) {
  return (
    <Card className="p-3">
      <CardHeader className="flex flex-row justify-between p-0 items-center">
        <div className="text-xl flex">
          {quantity} votes
          <div>
            <SparkLineChart
              data={chartdata}
              index="date"
              categories={["Performance", "Benchmark"]}
              colors={["blue", "cyan"]}
            />
          </div>
        </div>
        {/* <div className="">
          <Laugh size={18} />
        </div> */}
      </CardHeader>
      <CardFooter className="text-muted-foreground text-xs p-0">
        <span className="text-emerald-500 mr-1">+3.48%</span> Since last month
      </CardFooter>
    </Card>
  );
}
