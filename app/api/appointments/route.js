import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/Appointment"; // Adjusted for Appointment model
import { NextResponse } from "next/server";

// POST request to create a new appointment
export async function POST(request) {
  const { name, email, date, time, description, status } = await request.json();
  
  await connectMongoDB();
  
  // Create a new appointment with the provided fields
  await Appointment.create({ name, email, date, time, description, status });
  
  return NextResponse.json({ message: "Appointment Created" }, { status: 201 });
}

// GET request to fetch all appointments
export async function GET(request) {
  await connectMongoDB();
  
  // Find all appointments in the database
  const appointments = await Appointment.find();
  
  return NextResponse.json({ appointments });
}

// DELETE request to remove an appointment by ID
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  
  await connectMongoDB();
  
  // Delete the appointment with the specified ID
  await Appointment.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Appointment Deleted" }, { status: 200 });
}
