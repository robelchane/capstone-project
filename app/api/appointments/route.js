import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/appointment"; // Ensure consistent capitalization for model import
import { NextResponse } from "next/server";

// POST: Create a new appointment
export async function POST(request) {
  try {
    const { name, email, date, time, notes } = await request.json(); // Extract fields from the request
    await connectMongoDB(); // Establish the MongoDB connection

    // Create a new appointment with provided details
    const newAppointment = await Appointment.create({ name, email, date, time, notes });

    return NextResponse.json({ message: "Appointment Created", appointment: newAppointment }, { status: 201 });
  } catch (error) {
    // Return a detailed error message for debugging
    return NextResponse.json(
      { error: "Failed to create appointment", details: error.message },
      { status: 500 }
    );
  }
}

// GET: Fetch all appointments
export async function GET() {
  try {
    await connectMongoDB(); // Connect to the database

    // Retrieve all appointments from the database
    const appointments = await Appointment.find();

    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    // Handle any database or query errors
    return NextResponse.json(
      { error: "Failed to fetch appointments", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE: Remove an appointment by ID
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id"); // Get the appointment ID from query parameters
    if (!id) {
      return NextResponse.json({ error: "Missing appointment ID" }, { status: 400 });
    }

    await connectMongoDB(); // Establish database connection

    // Find and delete the appointment by ID
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Appointment Deleted", appointment: deletedAppointment }, { status: 200 });
  } catch (error) {
    // Catch and report errors related to deletion
    return NextResponse.json(
      { error: "Failed to delete appointment", details: error.message },
      { status: 500 }
    );
  }
}
