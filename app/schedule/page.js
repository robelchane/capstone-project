"use client";
import { useState } from "react";

export default function Schedule() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent (for date, ensure it's in ISO format if needed)
    const appointmentData = {
      ...formData,
      date: new Date(formData.date).toISOString(), // Ensure correct date format (ISO string)
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData), // Send the data to the backend
      });

      if (response.ok) {
        setFormData({ name: "", email: "", date: "", time: "", notes: "" });
        alert("Appointment created successfully!");
      } else {
        alert("Failed to create appointment. Please try again.");
      }
    } catch (error) {
      console.error("Failed to create appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-center text-2xl font-bold text-gray-900">Book an Appointment</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="space-y-4">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            
            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            
            {/* Date Field */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            
            {/* Time Field */}
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            
            {/* Notes Field */}
            <textarea
              name="notes"
              placeholder="Notes (Optional)"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
