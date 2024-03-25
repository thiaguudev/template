"use client";

import { useEffect, useState } from "react";

import { AddButton } from "@/components/buttons";
import { DialogSurvey } from "@/components/dialog-survey";
import CardSurvey from "@/components/card-survey";
import { Survey } from "@prisma/client";

export default function SurveysPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [surveys, setSurveys] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/surveys").then((response) => {
      response.json().then((data) => setSurveys(data));
    });
  }, []);

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
        {surveys.map((survey) => (
          <CardSurvey key={survey.id} {...survey} />
        ))}
      </div>
    </div>
  );
}
