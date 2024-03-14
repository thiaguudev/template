"use client";

import { AreaChart, DonutChart, Card } from "@tremor/react";

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

const dataFormatter = (number: any) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Promoters",
    value: "1576",
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

export default function Example() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-5">
        {data.map((item) => (
          <Card key={item.name}>
            <p className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              <span
                className={classNames(
                  item.changeType === "positive"
                    ? "bg-emerald-500"
                    : "bg-red-500",
                  "rounded text-white px-2 py-1 text-tremor-default font-medium"
                )}
              >
                {item.change}
              </span>
            </p>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
          </Card>
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
