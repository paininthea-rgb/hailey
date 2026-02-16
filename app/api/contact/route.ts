import { NextResponse } from "next/server";
import { isFirebaseConfigured, saveContactSubmission } from "@/lib/firebase";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    if (!isFirebaseConfigured()) {
      return NextResponse.json(
        { message: "Firebase is not configured yet. Add your env values first." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Name, email, phone, and message are required." },
        { status: 400 },
      );
    }

    const id = await saveContactSubmission({ name, email, phone, message });

    return NextResponse.json(
      {
        message:
          "Thanks! Your message was saved. You can connect a Firebase Cloud Function later to send emails automatically.",
        id,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ message: "Failed to submit. Please try again." }, { status: 500 });
  }
}
