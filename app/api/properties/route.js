// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

import connectMongoDB from "../../../libs/mongodb";
import Property from "../../../models/property";
import { NextResponse } from "next/server";

// POST request to create a new property
export async function POST(request) {
  const { name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image, 
    squareFootage, yearBuilt, propertyType, status, parkingSpaces, lotSize, isFeatured, virtualTourLin } = await request.json();
  
  await connectMongoDB();
  
  // Create a new property with the provided fields
  await Property.create({ name, price, bedrooms, bathrooms, address, sellerName, sellerEmail, detail, summary, image, 
    squareFootage, yearBuilt, propertyType, status, parkingSpaces, lotSize, isFeatured, virtualTourLin  });
  
  return NextResponse.json({ message: "Property Created" }, { status: 201 });
}

// GET request to fetch all properties with optional filters
export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = request.nextUrl;
    const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || Number.MAX_SAFE_INTEGER;
    const bedrooms = searchParams.get("bedrooms");
    const bathrooms = searchParams.get("bathrooms");
    const address = searchParams.get("address"); // New address filter

    // Build the query based on filters
    const query = {
      price: { $gte: minPrice, $lte: maxPrice },
    };

    if (bedrooms) query.bedrooms = parseInt(bedrooms);
    if (bathrooms) query.bathrooms = parseInt(bathrooms);
    if (address) query.address = { $regex: address, $options: "i" }; // Case-insensitive address search

    // Fetch properties matching the query
    const properties = await Property.find(query);

    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json({ message: "Failed to fetch properties" }, { status: 500 });
  }
}


// DELETE request to remove a property by ID
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  
  await connectMongoDB();
  
  // Delete the property with the specified ID
  await Property.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Property Deleted" }, { status: 200 });
}

// PUT request to update a property by ID
export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const updatedData = await request.json();

  await connectMongoDB();

  const property = await Property.findById(id);

  if (!property) {
    return NextResponse.json({ message: "Property not found" }, { status: 404 });
  }

  Object.assign(property, updatedData); // Update with new data
  await property.save();

  return NextResponse.json({ message: "Property Updated", property }, { status: 200 });
}
