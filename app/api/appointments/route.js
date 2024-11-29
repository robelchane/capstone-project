
import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/appointment"; // Ensure consistent capitalization for model import
import { NextResponse } from "next/server";


// POST: Create a new appointment

try {
    const{ name, email, date, time, notes } = await request.json(); //Extract fields from the request
    await connectMongoDB(); //Establish the MongoDB connection

    // Create a new appointment with provided details 
    const  newAppointment = await Appointment.create({ name, email, date, time, notes });

    return NextResponse.json({ message: "Appointment Created", appointment: newAppointment }, { status: 201 });
} catch