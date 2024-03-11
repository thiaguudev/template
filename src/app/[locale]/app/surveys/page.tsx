"use client";

import { AddButton } from "@/components/buttons";
import CardSurvey from "@/components/card-survey";

export default function Layout() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl mb-3 text-primary font-black">Surveys</h1>
        <AddButton>Create survey</AddButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardSurvey href="/asdeqwe" name="NPS #01" status={1} />
        <CardSurvey href="/asdeqwe" name="CSAT #02" status={2} />
        <CardSurvey href="/asdeqwe" name="CES #01" status={2} />
      </div>
    </div>
  );
}
