import mongoose, { Schema } from "mongoose";

// Define the Favorite schema
const favoriteSchema = new Schema(
  {
    userId: {
      type: String,
      required: true, // The ID of the user who saved the property
    },
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property", // Reference to the Property model
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create or use the existing Favorite model
const Favorite = mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);

export default Favorite;
