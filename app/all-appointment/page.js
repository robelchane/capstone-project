"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AllAppointments() {
  const [appointments, setAppointments] = useState([]); // State to hold the fetched appointments
  const [loading, setLoading] = useState(false);

  // Fetch appointments without any filters
  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/appointments"); // Assuming this API returns all appointments
      const data = await response.json(); // Parse the response as JSON
      setAppointments(data.appointments || []); // Update the appointments state with the fetched data
    } catch (error) {
      console.error("Failed to fetch appointments", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Fetch all appointments when the component mounts
  useEffect(() => {
    fetchAppointments(); // Call the fetch function to load appointments on mount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="py-8 px-4 mt-16 bg-teal-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 flex justify-between items-center px-8 fixed top-0 left-0 w-full z-10 shadow-md">
        <Link href="/" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
          Appointment List
        </Link>
        <nav className="space-x-6">
          <Link href="/appointments" className="text-lg hover:text-yellow-300 transition-colors">
            View Appointments
          </Link>
        </nav>
      </header>

      {/* Loading spinner */}
      {loading && <p>Loading appointments...</p>}

      {/* Card-style Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <Link
              key={appointment._id}
              href={`/appointments/${appointment._id}`} // Navigate to the specific appointment page
              className="border p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold mb-2">{appointment.name}</h2>
                <p className="text-lg text-gray-700">{appointment.date}</p>
                <p className="text-sm text-gray-500 mt-2">{appointment.details}</p>
                <p className="text-sm text-gray-500">Location: {appointment.location}</p>
                <p className="text-sm text-gray-500">Status: {appointment.status}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
}
