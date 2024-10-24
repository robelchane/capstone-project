import connectMongoDB from '../../../libs/mongodb'; // Assuming you have the correct path
import mongoose from 'mongoose';

export default async function handler(req, res) {
  // Connect to MongoDB
  await connectMongoDB();

  const db = mongoose.connection.db; // Get the MongoDB database instance

  if (req.method === 'POST') {
    const { propertyId } = req.body;
    const userId = 'exampleUserId'; // Replace this with actual authenticated user ID from your authentication logic

    try {
      // Update the user's favorite list
      await db.collection('users').updateOne(
        { _id: userId },
        { $addToSet: { favorites: propertyId } } // Avoid duplicates in the favorites list
      );

      // Respond with a success message
      res.status(200).json({ message: 'Property added to favorites' });
    } catch (error) {
      console.error('Error adding property to favorites:', error);
      res.status(500).json({ error: 'Failed to save favorite property' });
    }
  } else {
    // Handle any method other than POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
