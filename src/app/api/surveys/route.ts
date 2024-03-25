import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET() {
  const data = Array.from({ length: 35 }, () => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    type: faker.helpers.arrayElement(["nps", "ces", "csat", "custom"]) as any,
    description: faker.lorem.lines(2),
    quantity: faker.number.int(),
    status: faker.helpers.arrayElement(["published", "unpublished"]) as any,
  }));

  return NextResponse.json(data);
  // return NextResponse.json({
  //   type: "nps",
  //   question: "How likely are you to recommend Survey Apoli to a friend?",
  //   buttonTextColor: "#deceee",
  //   buttonBackgroundColor: "#deceee",
  //   buttonStyle: "outline",
  //   leftLabel: "Not Likely",
  //   rightLabel: "Very Likely",
  //   timeToShow: "2",
  //   isMobile: true,
  //   skipComment: false,
  //   buttonShape: "rounded-xl",
  //   welcomeMessage: "Can you help us with a question?",
  //   thanksTitle: "Thank you 🙏",
  //   thanksMessage: "Thank you for help us.",
  //   showSurveyBranding: true,
  //   showWelcomeMessage: true,
  // })
}