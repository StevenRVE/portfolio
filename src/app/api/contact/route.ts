import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("Received request:", request);

    const { firstName, lastName, email, subject, message } =
      await request.json();

    // Send email using Resend
    await resend.emails.send({
      from: "sve.portfolio.contact@bwaits.nl", // Sender's email address
      to: "stevenvanesch.sve@gmail.com", // Recipient's email address (e.g., yours)
      subject: subject || "No subject", // Default subject
      html: `
      <h1>Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    });

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
