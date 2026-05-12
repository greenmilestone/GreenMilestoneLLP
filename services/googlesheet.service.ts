// Google Sheet Services

import { google } from "googleapis";

export type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    interest: string;
    message: string;
};

export async function appendContactToSheet(data: ContactFormData) {
    try {
        // Validate environment variables
        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SPREADSHEET_ID) {
            throw new Error("Missing Google Sheets API credentials in environment variables.");
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                // Replace literal \n with actual newlines to properly parse the private key from .env
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ auth, version: "v4" });

        const timestamp = new Date().toISOString();

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: "Sheet1!A:F", // Appends to the next empty row in columns A through F
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        timestamp,
                        data.firstName,
                        data.lastName,
                        data.email,
                        data.interest,
                        data.message,
                    ],
                ],
            },
        });

        return { success: true, data: response.data };
    } catch (error: any) {
        console.error("Error appending to Google Sheet:", error);
        throw new Error(error.message || "Failed to append to Google Sheet");
    }
}