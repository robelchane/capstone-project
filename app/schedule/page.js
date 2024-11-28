"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [reason, setReason] = useState("");
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/appointments");
      const data = await response.json();
      setAppointments(data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleSchedule = async () => {
    if (!selectedDate || !buyerName || !buyerEmail || !reason) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyerName, buyerEmail, date: selectedDate, reason }),
      });

      if (response.ok) {
        alert("Appointment scheduled successfully!");
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule an Appointment</h1>

      <div className="mb-4">
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <p className="mt-2">Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-2"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 w-full mb-2"
          value={buyerEmail}
          onChange={(e) => setBuyerEmail(e.target.value)}
        />
        <textarea
          placeholder="Reason for Appointment"
          className="border p-2 w-full mb-2"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSchedule}
      >
        Schedule Appointment
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        {appointments.map((appt) => (
          <div key={appt._id} className="border p-4 mb-2 rounded">
            <p>
              <strong>Buyer:</strong> {appt.buyerName}
            </p>
            <p>
              <strong>Email:</strong> {appt.buyerEmail}
            </p>
            <p>
              <strong>Date:</strong> {new Date(appt.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Reason:</strong> {appt.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
