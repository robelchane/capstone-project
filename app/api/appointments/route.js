import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/Appointment";

export default async function handler(req, res) {
  await connectMongoDB();

  const { method } = req;

  if (method === "POST") {
    try {
      const { name, email, date, time, notes } = req.body;
      const appointment = await Appointment.create({ name, email, date, time, notes });
      res.status(201).json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Failed to create appointment" });
    }
  } else if (method === "GET") {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

