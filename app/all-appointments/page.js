
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
        }   finally {
            setLoading(false);
         }
        }; 
        
        
}


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
                ></div>



    