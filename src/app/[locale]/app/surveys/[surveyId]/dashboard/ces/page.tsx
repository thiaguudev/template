"use client";

import { AreaChart, DonutChart, Card } from "@tremor/react";

import CardChart from "@/components/charts/card-chart";

const chartdata = [
  {
    date: "Jan 22",
    Detractors: 888,
    Neutrals: 35,
    Promoters: 858,
  },
  {
    date: "Feb 22",
    Detractors: 745,
    Neutrals: 2338,
    Promoters: 356,
  },
  {
    date: "Mar 22",
    Detractors: 652,
    Neutrals: 2338,
    Promoters: 100,
  },
  {
    date: "Apr 22",
    Detractors: 241,
    Neutrals: 398,
    Promoters: 158,
  },
  {
    date: "May 22",
    Detractors: 2890,
    Neutrals: 684,
    Promoters: 685,
  },
  {
    date: "Jun 22",
    Detractors: 2890,
    Neutrals: 24,
    Promoters: 253,
  },
  {
    date: "Jul 22",
    Detractors: 2890,
    Neutrals: 684,
    Promoters: 521,
  },
  {
    date: "Aug 22",
    Detractors: 154,
    Neutrals: 168,
    Promoters: 698,
  },
  {
    date: "Sep 22",
    Detractors: 352,
    Neutrals: 157,
    Promoters: 584,
  },
  {
    date: "Oct 22",
    Detractors: 168,
    Neutrals: 3458,
    Promoters: 10,
  },
  {
    date: "Nov 22",
    Detractors: 584,
    Neutrals: 157,
    Promoters: 18,
  },
  {
    date: "Dec 22",
    Detractors: 4856,
    Neutrals: 498,
    Promoters: 689,
  },
];

const data = [
  {
    name: "Low effort",
    value: "1579",
    change: "+6.1%",
    changeType: "positive",
  },
  {
    name: "Medium effort",
    value: "235",
    change: "+19.2%",
    changeType: "positive",
  },
  {
    name: "High effort",
    value: "21",
    change: "-1.2%",
    changeType: "negative",
  },
  {
    name: "Interactions",
    value: "538",
    change: "59%",
    changeType: "positive",
  },
];

const sales = [
  {
    name: "low effort",
    sales: 240,
  },
  {
    name: "medium effort",
    sales: 190,
  },
  {
    name: "high effort",
    sales: 139,
  },
];

export default function DashboardPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-5">
        {data.map((item) => (
          <CardChart key={item.name} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        <Card className="md:col-span-2">
          <AreaChart
            className="h-60"
            data={chartdata}
            index="date"
            categories={["Promoters", "Neutrals", "Detractors"]}
            colors={["emerald-300", "yellow-300", "red-300"]}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          />
        </Card>
        <Card className="flex items-center justify-center md:col-span-1">
          <DonutChart
            data={sales}
            category="sales"
            index="name"
            colors={["emerald-300", "yellow-300", "red-300"]}
          />
        </Card>
      </div>
    </div>
  );
}
