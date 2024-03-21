"use client";

import Page from "@/components/shared/page";

import SelectPlatform from "./_components/select-platform";

type SurveyProps = {
  params: {
    surveyId: string;
  };
};

export default function Survey({ params }: SurveyProps) {
  return (
    <Page>
      <SelectPlatform />
    </Page>
  );
}
