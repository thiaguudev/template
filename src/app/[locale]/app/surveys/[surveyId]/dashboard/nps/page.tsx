"use client";

import { AreaChart } from "@/components/charts";
import DonutChart from "@/components/charts/donut-chart";
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
    name: "Promoters",
    value: "1579",
    change: "+6.1%",
    changeType: "positive",
  },
  {
    name: "Neutrals",
    value: "235",
    change: "+19.2%",
    changeType: "positive",
  },
  {
    name: "Detractors",
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
    name: "Promoters",
    sales: 240,
  },
  {
    name: "Neutrals",
    sales: 190,
  },
  {
    name: "Detractors",
    sales: 139,
  },
];

const colors = ["emerald", "amber", "rose", "zinc"];

export default function DashboardPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-5">
        {data.map((item, index) => (
          <CardChart
            key={item.name}
            {...item}
            decorationColor={colors[index]}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        <AreaChart
          data={chartdata}
          index="date"
          categories={["Promoters", "Neutrals", "Detractors"]}
          colors={["emerald-300", "yellow-300", "red-300"]}
        />
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          colors={["emerald-300", "yellow-300", "red-300"]}
        />
      </div>
    </div>
  );
}
