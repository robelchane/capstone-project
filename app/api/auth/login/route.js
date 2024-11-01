import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Authenticate the user
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the current user from Clerk
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if the user already exists in the database
    let dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    // If the user doesn't exist, create a new one
    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress ?? '',
          name: user.fullName,
        },
      });
    }

    // Return the user data
    return NextResponse.json({ message: 'User stored successfully', user: dbUser }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/auth/login:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
