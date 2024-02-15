import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { env } from "@/lib/env";
import { resend } from "@/lib/resend";
import WelcomeEmail from "@/components/email/welcome";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  const { username, to } = await req.json();

  try {
    await resend.emails.send({
      from: env.FROM_EMAIL,
      to,
      subject: `🎉Welcome to ${siteConfig.title}`,
      html: "",
      react: WelcomeEmail({ username }),
    });
    return NextResponse.json(null, { status: StatusCodes.CREATED });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending welcome email" },
      { status: StatusCodes.BAD_REQUEST }
    );
  }
}
