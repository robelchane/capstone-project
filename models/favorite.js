// models/Favorite.js
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  propertyId: { type: String, required: true },
});

export default mongoose.models.favorite || mongoose.model("favorite", favoriteSchema);
