import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultFrom = "vrinda@siimba.ai";

export async function POST(request: NextRequest) {
  try {
    const { email, useCase, interview } = await request.json();

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service is not configured (missing RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL || defaultFrom;
    const templateId = process.env.RESEND_WELCOME_TEMPLATE_ID;

    const { data, error } = templateId
      ? await resend.emails.send({
          from,
          to: email,
          subject: "Welcome to Siimba!",
          template: {
            id: templateId,
            variables: {
              use_case: typeof useCase === "string" ? useCase : "personal",
              interview: interview ? "yes" : "no",
            },
          },
        })
      : await resend.emails.send({
          from,
          to: email,
          subject: "Welcome to Siimba!",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
              <h2 style="margin: 0 0 12px;">Welcome to Siimba</h2>
              <p style="margin: 0 0 12px;">Thanks for joining the waitlist.</p>
              <p style="margin: 0 0 12px;">
                We will email you when early access is ready.
              </p>
              <p style="margin: 0;">- The Siimba Team</p>
            </div>
          `,
          text: "Welcome to Siimba. Thanks for joining the waitlist. We will email you when early access is ready.",
        });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: error.message || "Failed to send welcome email.",
          resendErrorName: error.name,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
