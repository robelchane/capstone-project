import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/user";
import { NextResponse } from "next/server";

// POST request to save a user

export  async function POST(request) {
    try{
        await connectMongoDB();
        const { userId, email, name } = await request.json();

        // Create a new user object
        const user = new User({
            userId,
            email,
            name,
        });
        // Save the user object to the database
        await user.save();
        return NextResponse.json({ message: "User saved" }, { status: 200 });
    }   catch (error) {
        return NextResponse.json({ message: "Failed to save user" }, { status: 500 });
    }
}
