"use client";

import { ResponsiveBar } from "@nivo/bar";

export default function Survey({ params }: any) {
  const data = [
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "C", value: 15 },
  ];

  return (
    <div className="mt-5">
      <div className="w-28 h-20">
        <ResponsiveBar data={data} legends={[]} />
      </div>
    </div>
  );
}
