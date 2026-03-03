import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message ?? "Validation failed." },
      { status: 400 }
    );
  }

  const { name, email, message } = result.data;

  // If RESEND_API_KEY is set, send via Resend. Otherwise, log and succeed.
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.RESEND_TO ?? "j@mesvalentine.com",
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }
  } else {
    console.log("Contact form submission (no RESEND_API_KEY):", {
      name,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
