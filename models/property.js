import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    
    name: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    address: String,
    sellerName: String,
    sellerEmail: String, 
    detail: String,
    summary: String,
    image: String,
    squareFootage: Number,            // New attribute for the area of the property
    yearBuilt: Number,                // New attribute for the construction year
    propertyType: String,             // New attribute for type of property (e.g., "house", "apartment")
    status: {                         // New attribute for availability status
      type: String,
      enum: ["available", "pending", "sold"],
      default: "available",
    },
    parkingSpaces: Number,            // New attribute for the number of parking spaces
    lotSize: Number,                  // New attribute for the lot size if applicable
    isFeatured: {                     // New attribute to highlight featured properties
      type: Boolean,
      default: false,
    },
    virtualTourLink: String, 
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;

