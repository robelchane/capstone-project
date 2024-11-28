//app/api/news_articles/[id]/route.js

import connectMongoDB from "../../../../libs/mongodb";
import NewsArticle from "../../../../models/newsArticle";
import { ObjectId } from "mongodb"; // ObjectId 가져오기
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params; // URL에서 전달된 id

  try {
    await connectMongoDB();

    let article;

    // ObjectId 유효성 검사
    if (ObjectId.isValid(id)) {
      // `_id`가 ObjectId인 경우 검색
      article = await NewsArticle.findOne({ _id: new ObjectId(id) });
    } else {
      // `id` 필드로 검색
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

































import { MongoClient } from "mongodb";

const uri = "mongodb+srv://robelchane:u80uyoQWnQufiWPq@cluster0.rarpl.mongodb.net"; // MongoDB 연결 문자열
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("newsarticles");

    // MongoDB에서 ID로 기사 데이터 검색
    const article = await collection.findOne({
      $or: [
        { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
        { id },
      ],
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }


    res.status(200).json({ article });
  } catch (error) {
    console.error("Failed to fetch article:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
}
