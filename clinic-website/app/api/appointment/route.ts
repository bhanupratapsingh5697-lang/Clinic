import { NextResponse } from "next/server";

// Stub API route for appointment requests. Wire this up to your email
// provider (Resend, SendGrid, etc.), CRM, or database before going live.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const required = ["name", "phone", "date"];
    const missing = required.filter((field) => !data[field]);
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // TODO: send an email/notification or save to a database here.
    console.log("New appointment request:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
