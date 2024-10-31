import connectMongoDB from '../../../libs/mongodb'; // Ensure this path is correct
import mongoose from 'mongoose';

export async function POST(req) {
  // Connect to MongoDB
  await connectMongoDB();

  const db = mongoose.connection.db; // Get the MongoDB database instance
  const { propertyId } = await req.json(); // Parse the request body
  const userId = 'exampleUserId'; // Replace this with actual authenticated user ID from your authentication logic

  try {
    // Update the user's favorite list
    await db.collection('users').updateOne(
      { _id: userId },
      { $addToSet: { favorites: propertyId } } // Avoid duplicates in the favorites list
    );

    // Respond with a success message
    return new Response(JSON.stringify({ message: 'Property added to favorites' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error adding property to favorites:', error);
    return new Response(JSON.stringify({ error: 'Failed to save favorite property' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// If you want to handle other methods, you can add them as well
export async function GET(req) {
  // Handle GET request if needed
  return new Response(JSON.stringify({ message: 'GET not implemented' }), {
    status: 405,
  });
}
