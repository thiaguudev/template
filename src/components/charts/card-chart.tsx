import { Card } from "@tremor/react";

type CardChartProps = {
  name: string;
  value: string;
  changeType: string;
  change: string;
  decorationColor?: string;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function CardChart({
  name,
  value,
  changeType,
  change,
  decorationColor = "",
}: CardChartProps) {
  return (
    <Card decoration="top" decorationColor={decorationColor} className="ring-0">
      <p className="flex items-start justify-between">
        <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {value}
        </span>
        <span
          className={classNames(
            changeType === "positive" ? "bg-emerald-500" : "bg-red-500",
            "rounded text-white px-2 py-1 text-tremor-default font-medium"
          )}
        >
          {change}
        </span>
      </p>
      <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {name}
      </p>
    </Card>
  );
}
