import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  buyerName: String,
  buyerEmail: String,
  date: Date,
  reason: String,
});

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
