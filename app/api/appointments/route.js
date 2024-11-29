
import connectMongoDB from "../../../libs/mongodb";
import Appointment from "../../../models/appointment"; // Ensure consistent capitalization for model import
import { NextResponse } from "next/server";


// POST: Create a new appointment

export async function POST(request) {