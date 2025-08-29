import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission`,
      text: message,
      html: `<h3>New message from ${name}</h3><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
   
    let errorMessage = "Unknown error";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    console.error("Error sending email:", errorMessage);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
