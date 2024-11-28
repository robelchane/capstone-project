//app/news_articles/[id]/page.js

"use client";

import { useState, useEffect } from "react";

export default function NewsDetail({ params }) {
  const { id } = params;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      console.log("Fetching article with ID:", id); // 디버깅
      try {
        const response = await fetch(`/api/news_articles/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data); // 디버깅
        setArticle(data.article);
      } catch (error) {
        console.error("Error fetching article:", error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchArticle();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-44 mb-32">Loading article, please wait...</p>;
  }

  if (!article) {
    return <p className="text-center mt-44 mb-32">Failed to load article. Please try again later.</p>;
  }

  return (
    <div className="p-12 mt-20">
        <h1 className="text-4xl font-serif text-[#001f3f] mb-10 text-center">{article.title}</h1>

        {/* 이미지 섹션 */}
        <div className="flex justify-center">
            <div className="w-full max-w-[80vw] max-h-[80vh] overflow-hidden">
            <img
                src={`/images/${article.img}`}
                alt={article.title}
                className="object-contain w-full h-auto shadow-md"
            />
            </div>
        </div>

        {/* 사진 아래 섹션 */}
        <div className="mt-20 text-center px-16">
            {/* Summary */}
            <p className="text-2xl text-gray-600 italic mb-4">{article.summary}</p>

            {/* Border */}
            <hr className="border-gray-300 my-6" />

            {/* Content */}
            <p className="mt-8 text-lg text-gray-600 font-serif leading-relaxed">{article.content}</p>
        </div>

        {/* Publish Date & Views */}
        <p className="text-sm text-gray-500 text-center mt-20">
            Published on: {new Date(article.publish_date).toLocaleDateString()} • Views: {article.view}
        </p>
    </div>
  );
}
