"use client";

import { AreaChart } from "@/components/charts";
import CardChart from "@/components/charts/card-chart";
import DonutChart from "@/components/charts/donut-chart";

const chartdata = [
  {
    date: "Jan 22",
    "High effort": 888,
    "Medium effort": 35,
    "Low effort": 858,
  },
  {
    date: "Feb 22",
    "High effort": 745,
    "Medium effort": 2338,
    "Low effort": 356,
  },
  {
    date: "Mar 22",
    "High effort": 652,
    "Medium effort": 2338,
    "Low effort": 100,
  },
  {
    date: "Apr 22",
    "High effort": 241,
    "Medium effort": 398,
    "Low effort": 158,
  },
  {
    date: "May 22",
    "High effort": 2890,
    "Medium effort": 684,
    "Low effort": 685,
  },
  {
    date: "Jun 22",
    "High effort": 2890,
    "Medium effort": 24,
    "Low effort": 253,
  },
  {
    date: "Jul 22",
    "High effort": 2890,
    "Medium effort": 684,
    "Low effort": 521,
  },
  {
    date: "Aug 22",
    "High effort": 154,
    "Medium effort": 168,
    "Low effort": 698,
  },
  {
    date: "Sep 22",
    "High effort": 352,
    "Medium effort": 157,
    "Low effort": 584,
  },
  {
    date: "Oct 22",
    "High effort": 168,
    "Medium effort": 3458,
    "Low effort": 10,
  },
  {
    date: "Nov 22",
    "High effort": 584,
    "Medium effort": 157,
    "Low effort": 18,
  },
  {
    date: "Dec 22",
    "High effort": 4856,
    "Medium effort": 498,
    "Low effort": 689,
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
          categories={["Low effort", "Medium effort", "High effort"]}
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
