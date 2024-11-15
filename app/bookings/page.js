/* I am trying to create a booking page for future clients to make inquiries. Decided to go with Google calendar
chatgpt helped me with tips on how to install the google api
I made use of Aaron's Vercel Web dev for refresher course in creating forms
https://www.youtube.com/watch?v=fqPXx03Rl2Y
*/

"use client";
import { useState } from "react";

export default function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the booking details to a server or API
    console.log("Booking Details:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Book an Appointment</h1>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md">
          <p>Thank you, {formData.name}! Your appointment is scheduled for {formData.date} at {formData.time}.</p>
          <p>We’ll be in touch at {formData.email}.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-semibold">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="notes" className="block text-gray-700 font-semibold">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Any specific requests or questions?"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 w-full"
          >
            Schedule Appointment
          </button>
        </form>
      )}
    </div>
  );
}
