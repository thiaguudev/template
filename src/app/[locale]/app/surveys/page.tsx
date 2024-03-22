"use client";

import { useState } from "react";
import { faker } from "@faker-js/faker";

import { AddButton } from "@/components/buttons";
import { DialogSurvey } from "@/components/dialog-survey";
import CardSurvey from "@/components/card-survey";

export default function SurveysPage() {
  const [open, setOpen] = useState(false);

  const data = Array.from({ length: 35 }, () => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    type: faker.helpers.arrayElement(["nps", "ces", "csat", "custom"]) as any,
    description: faker.lorem.lines(2),
    quantity: faker.number.int(),
    status: faker.helpers.arrayElement(["active", "inactive"]) as any,
  }));

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-2xl mb-3 text-primary font-black">
            Your Surveys
          </h1>
          <p className="text-muted-foreground">
            Create your surveys using one of our templates like NPS, CES and
            CSAT or a free survey with custom questions.
          </p>
        </div>
        <AddButton onClick={() => setOpen(!open)}>Create Survey</AddButton>
        <DialogSurvey open={open} onOpenChange={setOpen} />
      </div>
      <div className="grid gap-5 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((survey) => (
          <CardSurvey key={survey.id} {...survey} />
        ))}
      </div>
    </div>
  );
}
