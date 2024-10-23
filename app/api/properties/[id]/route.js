import connectMongoDB from "@/libs/mongodb";
import Property from "@/models/property";
import { NextResponse } from "next/server";

// PUT request to update a property by ID
export async function PUT(request, { params }) {
  const { id } = params;
  
  // Destructure the request body to get the updated property data
  const { name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image } = await request.json();
  
  await connectMongoDB();
  
  // Update the property with the provided fields
  await Property.findByIdAndUpdate(id, { name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image });
  
  return NextResponse.json({ message: "Property updated" }, { status: 200 });
}

// Get request to fetch all properties

export async function GET(request) {
  try {
    await connectMongoDB(); // Connect to the database
    
    // Fetch all properties from the database
    const properties = await Property.find({});
    
    // Return the properties in the response
    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    console.error("Error fetching properties:", error);
    
    // Return an error response
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}