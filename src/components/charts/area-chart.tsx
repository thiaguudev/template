import { Card, AreaChart as Chart } from "@tremor/react";

type AreaChartProps = {
  data: any;
  categories: string[];
  colors: string[];
  index: string;
};

export default function AreaChart({
  data,
  categories,
  colors,
  index,
}: AreaChartProps) {
  return (
    <Card className="md:col-span-2">
      <Chart
        className="h-60"
        data={data}
        index={index}
        categories={categories}
        colors={colors}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
}
