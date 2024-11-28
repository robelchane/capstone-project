import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../../models/Appointment";
import { NextResponse } from "next/server";

// GET all appointments
export async function GET(request) {
  try {
    await connectMongoDB();

    // Fetch all appointments from the database
    const appointments = await Appointment.find();
    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ message: "Failed to fetch appointments" }, { status: 500 });
  }
}

// POST a new appointment
export async function POST(request) {
  try {
    const data = await request.json(); // Get the data from the request body

    // Create a new appointment in the database
    const newAppointment = await Appointment.create(data);

    return NextResponse.json({ appointment: newAppointment }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ message: "Failed to create appointment" }, { status: 500 });
  }
}

// PUT (update) an existing appointment
export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const data = await request.json(); // Get the data from the request body

    // Find the appointment by ID and update it with the new data
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, data, { new: true });

    if (!updatedAppointment) {
      return NextResponse.json({ message: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json({ appointment: updatedAppointment }, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ message: "Failed to update appointment" }, { status: 500 });
  }
}

// DELETE an appointment
export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();

    // Find the appointment by ID and delete it
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return NextResponse.json({ message: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ message: "Failed to delete appointment" }, { status: 500 });
  }
}
