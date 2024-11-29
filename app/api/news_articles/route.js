//app/api/news_articles/route.js

import { NextResponse } from "next/server";
import connectToDatabase from "../../../libs/mongodb";
import NewsArticle from "../../../models/newsArticle";

// GET
export async function GET() {
    await connectToDatabase();

    const articles = await NewsArticle.find().sort({ publish_date: -1 }); // Sorted by publish date
    return NextResponse.json({ articles });
}
