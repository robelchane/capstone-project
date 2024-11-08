import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// This is the API route for Google OAuth
export async function POST(req) {
  try {
    const body = await req.json();

    // Initialize Google OAuth 2.0 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,733185859028-is50a36j0n42gtr3vjs76sr9754vuvsr.apps.googleusercontent.com,
      process.env.GOOGLE_CLIENT_SECRET,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,
      process.env.GOOGLE_REDIRECT_URI, 'http://localhost:3000/api/auth/callback' // Redirect URI
    );

    // Get the authorization code from the request body
    const { code } = body;

    // Exchange the authorization code for an access token
    const { tokens } = await oauth2Client.getToken(code);

    // Set the credentials for the API client
    oauth2Client.setCredentials(tokens);

    // Create a new calendar API client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Fetch the user's upcoming events from Google Calendar
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(), // Only upcoming events
      maxResults: 10, // Limit to 10 events
      singleEvents: true,
      orderBy: 'startTime',
    });

    // Return the events in the response
    return NextResponse.json({ events: events.data.items });
  } catch (error) {
    console.error('Error during Google OAuth:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
