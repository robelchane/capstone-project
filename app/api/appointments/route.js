
import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/appointment"; // Ensure consistent capitalization for model import
import { NextResponse } from "next/server";


// POST: Create a new appointment

try {
    const{ name, email, date, time, notes } = await request.json();