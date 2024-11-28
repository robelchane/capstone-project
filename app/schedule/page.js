import { useState } from "react";

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [appointments, setAppointments] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newAppointment = await response.json();
        setAppointments([...appointments, newAppointment]);
        setFormData({ name: "", email: "", date: "", time: "", notes: "" });
      }
    } catch (error) {
      console.error("Failed to create appointment:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/appointments");
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      }
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    }
  };

  return (
    <div>
      <h1>Appointments</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Add Appointment</button>
      </form>

      <button onClick={fetchAppointments}>Load Appointments</button>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.name} - {appointment.email} - {appointment.date} - {appointment.time} -{" "}
            {appointment.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
