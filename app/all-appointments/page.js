"use client";

import { useState, useEffect } from "react";

export default function AllAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/appointments");
      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const response = await fetch(`/api/appointments?id=${id}`, { method: "DELETE" });
      if (response.ok) {
        alert("Appointment deleted successfully!");
        fetchAppointments(); // Refresh appointments after deletion
      } else {
        alert("Failed to delete appointment.");
      }
    } catch (error) {
      console.error("Failed to delete appointment:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">All Appointments</h1>
        {loading ? (
          <div className="flex items-center justify-center">
            <p className="text-lg text-white">Loading appointments...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {appointments.length > 0 ? (
              appointments.map((appt) => (
                <div
                  key={appt._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{appt.name}</h2>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span> {appt.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Date:</span>{" "}
                      {new Date(appt.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Time:</span> {appt.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Notes:</span> {appt.notes || "No notes"}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 flex justify-end">
                    <button
                      onClick={() => deleteAppointment(appt._id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-lg text-white text-center col-span-full">
                No appointments found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
