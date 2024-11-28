"use client";

import { useState, useEffect } from "react";

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [appointments, setAppointments] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/appointments");
      const data = await response.json();
      setAppointments(data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
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
        setIsSubmitted(true);
        fetchAppointments();
      } else {
        alert("Failed to schedule appointment.");
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-5 mt-20">
        Book an Appointment
      </h1>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md">
          <p>
            Thank you, {formData.name}! Your appointment is scheduled for{" "}
            {formData.date} at {formData.time}.
          </p>
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
              className="bg-white mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              className="bg-white mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              className="bg-white mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              className="bg-white mt-1 p-2 border border-gray-300 rounded-md w-full"
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

      <div className="mt-10 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Upcoming Appointments
        </h2>
        {appointments.length ? (
          appointments.map((appt) => (
            <div key={appt._id} className="bg-white p-4 mb-4 rounded-lg shadow">
              <p>
                <strong>Name:</strong> {appt.name}
              </p>
              <p>
                <strong>Email:</strong> {appt.email}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(appt.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appt.time}
              </p>
              <p>
                <strong>Notes:</strong> {appt.notes || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No appointments yet.</p>
        )}
      </div>
    </div>
  );
}
