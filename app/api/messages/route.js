import connectMongoDB from "../../../libs/mongodb";
import Message from "../../../models/model";
import { NextResponse } from "next/server";

// POST request to create a new message
export async function POST(request) {
  try {
    const { senderId, receiverId,  messageBody, isRead, attachment, conversationId } = await request.json();

    await connectMongoDB();  // Ensure MongoDB connection

    // Create a new message with the provided fields
    const newMessage = await Message.create({
      senderId,
      receiverId,
      messageBody,
      isRead,   // Optional: defaults to false if not provided
      attachment,
      conversationId
    });

    return NextResponse.json({ message: "Message Created", data: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json({ message: "Failed to create message", error: error.message }, { status: 500 });
  }
}
