import dbConnect from "@/libs/mongodb";
import Appointment from "@/models/Appointment";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const appointments = await Appointment.find({});
        res.status(200).json({ success: true, appointments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json({ success: true, appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PATCH":
      try {
        const { id } = req.query;
        const appointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
