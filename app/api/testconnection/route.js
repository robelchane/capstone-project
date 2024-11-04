import connectMongoDB from "../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Testing MongoDB connection...");
    await connectMongoDB();
    console.log("MongoDB connection successful.");
    return NextResponse.json({ message: "Connected to MongoDB successfully" });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 });
  }
}
