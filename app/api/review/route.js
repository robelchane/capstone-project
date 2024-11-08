import { NextResponse } from "next/server";
import connectToDatabase from "../../../libs/mongodb";
import Review from "../../../models/review";
import multer from "multer";

// (GET)
export async function GET(req) {
    await connectToDatabase();
    const reviews = await Review.find();
    return NextResponse.json({ reviews });
}

// (POST)
export async function POST(req) {
    await connectToDatabase();
    const { reviewer, rating, comment, category } = await req.json();
    const review = new Review({ reviewer, rating, comment, category });
    await review.save();
    return NextResponse.json({ review });
}

// (DELETE)
export async function DELETE(req) {
    await connectToDatabase();
    const { id } = req.query;
    await Review.findByIdAndDelete(id);
    return NextResponse.json({ message: "Review Deleted" });
}