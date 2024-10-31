import connectMongoDB from "../../../../libs/mongodb";
 // Your MongoDB connection function
import User from '../../../../models/user'; // Your User model
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

export async function GET() {
  // Connect to the MongoDB database
  await connectMongoDB();

  // Get the current authenticated user from Clerk
  const user = await currentUser();
  
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 });
  }

  // Check if the user exists in your MongoDB database
  let dbUser = await User.findOne({ clerkId: user.id });

  // If the user does not exist, create a new user
  if (!dbUser) {
    dbUser = new User({
      clerkId: user.id,
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress.emailAddress ?? '' // Get the primary email
    });
    await dbUser.save();
  }

  // Return a success response with the user's information
  return NextResponse.json({ message: 'User logged in and saved', user: dbUser }, { status: 200 });
}
