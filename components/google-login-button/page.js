// /components/GoogleLoginButton.js

"use client"; // This tells Next.js to treat this as a client component

import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

export default function GoogleLoginButton() {
  const [events, setEvents] = useState(null);

  const handleSuccess = async (response) => {
    try {
      // Send the authorization code to the backend API route for token exchange
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: response.code }), // Send the code to your backend
      });

      const data = await res.json();
      
      // Handle the response, for example, store or display the calendar events
      if (data.events) {
        setEvents(data.events);
      } else {
        console.error('Failed to retrieve events', data.error);
      }
    } catch (error) {
      console.error('Error with Google Login:', error);
    }
  };

  const handleFailure = (error) => {
    console.error('Google Login Failed:', error);
  };

  return (
    <div>
      {/* Google login button */}
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
        useOneTap={true}  // Optional: enables Google one-tap login
      />
      
      {/* Display the events if they exist */}
      {events && (
        <div>
          <h3>Your Upcoming Google Calendar Events:</h3>
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event.summary} - {event.start.dateTime}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
