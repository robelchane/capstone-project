import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: "",
  email: "",
  date: "",
  time: "",
  notes: "",
});

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
