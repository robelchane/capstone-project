import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    time: String,
    notes: String,
  });