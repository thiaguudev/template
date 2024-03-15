import { Card, DonutChart as Chart } from "@tremor/react";

type DonutChartProps = {
  data: any;
  category: string;
  index: string;
  colors: string[];
};

export default function DonutChart({
  data,
  category,
  index,
  colors,
}: DonutChartProps) {
  return (
    <Card className="flex items-center justify-center md:col-span-1">
      <Chart data={data} category={category} index={index} colors={colors} />
    </Card>
  );
}
