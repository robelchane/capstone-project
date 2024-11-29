//app/api/news_articles/[id]/route.js

import connectMongoDB from "../../../../libs/mongodb";
import NewsArticle from "../../../../models/newsArticle";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();

    let article;

    if (ObjectId.isValid(id)) {
      article = await NewsArticle.findOne({ _id: new ObjectId(id) });
    } else {
      article = await NewsArticle.findOne({ id: parseInt(id, 10) });
    }

    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ article }, { status: 200 });
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    return NextResponse.json({ message: "Failed to fetch article" }, { status: 500 });
  }
}