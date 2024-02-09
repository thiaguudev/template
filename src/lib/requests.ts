import { env } from "@/lib/env";
import { SenderEmail, senderEmail } from "@/validators/schema";

export async function sendEmail({ username, email }: SenderEmail) {
  try {
    const data = senderEmail.parse({ username, email });

    return fetch(`${env.VERCEL_URL}/api/email`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("❌ Error to send email");
  }
}
