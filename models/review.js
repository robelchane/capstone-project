// models/Review.js
import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    reviewer: String,
    rating: Number,
    comment: String,
    photo: String,
    date: { type: Date, default: Date.now },
    category: String,
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
