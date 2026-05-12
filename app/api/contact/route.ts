// API Route for Contact Form to Google Sheet

import { NextResponse } from "next/server";
import { appendContactToSheet, ContactFormData } from "@/services/googlesheet.service";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Basic server-side validation
    if (!body.email || !body.firstName || !body.message) {
      return NextResponse.json(
        { error: "First Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    // Attempt to append to Google Sheets
    await appendContactToSheet(body);

    return NextResponse.json(
      { message: "Your inquiry has been successfully captured. Thank you!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Route Error (Contact):", error);
    return NextResponse.json(
      { error: "Failed to process the request. Please try again later." },
      { status: 500 }
    );
  }
}
