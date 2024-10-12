// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

import connectMongoDB from "@/libs/mongodb";
import Property from "@/models/property";
import { NextResponse } from "next/server";

// POST request to create a new property
export async function POST(request) {
  const { name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image } = await request.json();
  
  await connectMongoDB();
  
  // Check if a property with the same name or address already exists
  const existingProperty = await Property.findOne({ $and: [{ name }, { address }] });
  
  if (existingProperty) {
    return NextResponse.json({ message: "Property already exists" }, { status: 409 });
  }
  
  // Create a new property if it doesn't exist
  await Property.create({ name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image });
  
  return NextResponse.json({ message: "Property Created" }, { status: 201 });
}

// GET request to fetch all properties with optional filters
export async function GET(request) {
  await connectMongoDB();
  
  const { searchParams } = request.nextUrl;
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const bedrooms = searchParams.get("bedrooms");
  const bathrooms = searchParams.get("bathrooms");

  // Build the query based on the filters provided
  const query = {};
  
  if (minPrice) query.price = { ...query.price, $gte: minPrice };
  if (maxPrice) query.price = { ...query.price, $lte: maxPrice }; 
  if (bedrooms) query.bedrooms = bedrooms; 
  if (bathrooms) query.bathrooms = bathrooms; 
  
  // Find all properties matching the query
  const properties = await Property.find(query);
  
  return NextResponse.json({ properties });
}

// DELETE request to remove a property by ID
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  
  await connectMongoDB();
  
  // Delete the property with the specified ID
  await Property.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Property Deleted" }, { status: 200 });
}
