// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

import connectMongoDB from "../../../libs/mongodb";
import appointment from "../../../models/appointment";
import { NextResponse } from "next/server";

// POST request to create a new appointment
export async function POST(request) {
  const { name, email, date, time, notes} = await request.json();
  
  await connectMongoDB();
  
  // Create a new appointment with the provided fields
  await appointment.create({ name, email, date, time, notes});
  
  return NextResponse.json({ message: "appointment Created" }, { status: 201 });
}



// DELETE request to remove a appointment by ID
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  
  await connectMongoDB();
  
  // Delete the appointment with the specified ID
  await appointment.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "appointment Deleted" }, { status: 200 });
}

// PUT request to update a appointment by ID
export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const updatedData = await request.json();

  await connectMongoDB();

  const appointment = await appointment.findById(id);

  if (!appointment) {
    return NextResponse.json({ message: "appointment not found" }, { status: 404 });
  }

  Object.assign(appointment, updatedData); // Update with new data
  await appointment.save();

  return NextResponse.json({ message: "appointment Updated", appointment }, { status: 200 });
}
