"use client";

import { useState } from "react";

import { AddButton } from "@/components/buttons";
import { DialogSurvey } from "@/components/dialog-survey";
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
        <CardSurvey
          name="Survey #01"
          type="NPS"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          quantity={1689}
        />
        <CardSurvey
          name="Survey #02"
          type="NPS"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
          quantity={0}
        />
        <CardSurvey
          name="Survey #03"
          type="CSAT"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing"
          quantity={9}
        />
      </div>
    </div>
  );
}
