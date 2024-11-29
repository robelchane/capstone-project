//chatgpt
//Aaron's Vercel Web dev

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment created successfully!");
        setFormData({ name: "", email: "", date: "", time: "", notes: "" });
      } else {
        alert("Failed to create appointment.");
      }
    } catch (error) {
      console.error("Failed to create appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date Input */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Appointment Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Time Input */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Appointment Time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Notes Textarea */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Add any special instructions or notes"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
