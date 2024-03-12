"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddButton } from "@/components/buttons";
import { DialogSurvey } from "@/components/dialog-survey";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Edit2, Link, Pause, Trash } from "iconsax-react";
import CardSurvey from "@/components/card-survey";

export default function SurveysPage() {
  const [open, setOpen] = useState(false);

  const handleDeleteSurvey = async () => {};

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
        <AddButton onClick={() => setOpen(!open)}>Create survey</AddButton>
        <DialogSurvey open={open} onOpenChange={setOpen} />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"> */}
      <div className="flex flex-col gap-5 mt-5">
        <CardSurvey name="Survey #01" type="NPS" description="Survey NPS #01" />
        <CardSurvey name="Survey #02" type="NPS" description="Survey NPS #02" />
        <CardSurvey
          name="Survey #03"
          type="CSAT"
          description="Survey CSAT #03"
        />
      </div>
    </div>
  );
}
