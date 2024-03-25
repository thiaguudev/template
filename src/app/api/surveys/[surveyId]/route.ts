import { NextResponse } from "next/server";

export async function GET() {
  console.log('called');
  return NextResponse.json({
    type: "nps",
    question: "How likely are you to recommend Survey Apoli to a friend?",
    buttonTextColor: "#deceee",
    buttonBackgroundColor: "#deceee",
    buttonStyle: "outline",
    leftLabel: "Not Likely",
    rightLabel: "Very Likely",
    timeToShow: "2",
    isMobile: true,
    skipComment: false,
    buttonShape: "rounded-xl",
    welcomeMessage: "Can you help us with a question?",
    thanksTitle: "Thank you 🙏",
    thanksMessage: "Thank you for help us.",
    showSurveyBranding: true,
    showWelcomeMessage: true,
  })
}