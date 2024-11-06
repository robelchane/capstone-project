// app/api/properties/[id]/route.js
// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data

import connectMongoDB from "../../../../libs/mongodb";
import Property from "../../../../models/property";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    
    // Fetch the property by ID
    const property = await Property.findById(id);
    
    if (!property) {
      return NextResponse.json({ message: "Property not found" }, { status: 404 });
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    return NextResponse.json({ message: "Failed to fetch property" }, { status: 500 });
  }
}
