"use client";

import { useState } from "react";

import { AddButton } from "@/components/buttons";
import { DialogSurvey } from "@/components/dialog-survey";
import CardSurvey from "@/components/card-survey";

export default function SurveysPage() {
  const [open, setOpen] = useState(false);

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
      <div className="grid gap-3 mt-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
        <CardSurvey
          name="Survey #01"
          type="NPS"
          description="Survey #01 ..."
          quantity={1689}
        />
        <CardSurvey
          name="Survey #02"
          type="NPS"
          description="Survey #02 ..."
          quantity={21}
        />
        <CardSurvey
          name="Survey #03"
          type="CSAT"
          description="Survey #03 ..."
          quantity={9}
        />

        <CardSurvey
          name="Survey #04"
          type="Custom"
          description="Survey #04 ..."
          quantity={289}
        />

        <CardSurvey
          name="Survey #05"
          type="CES"
          description="Survey #05 ..."
          quantity={997}
        />
      </div>
    </div>
  );
}
