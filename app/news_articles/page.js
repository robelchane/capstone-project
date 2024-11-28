//app/news_articles/page.js

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewsArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/news_articles");
      const data = await res.json();
      setArticles(data.articles); 
      setFilteredArticles(data.articles); 
    }
    fetchArticles();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredArticles(articles); 
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category === category)
      ); 
    }
  };

  return (
    <div className="p-12 mt-24">

      <h1 className="text-5xl font-serif text-center text-[#001f3f] w-full mb-10">
        News & Articles
      </h1>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "all"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#003366] hover:text-white transition-colors duration-300`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("lifestyle")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "lifestyle"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Lifestyle
        </button>
        <button
          onClick={() => handleCategoryClick("property management")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "property management"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Property Management
        </button>
        <button
          onClick={() => handleCategoryClick("industry news")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "industry news"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Industry News
        </button>
        <button
          onClick={() => handleCategoryClick("expert interviews")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "expert interviews"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Expert Interviews
        </button>
        <button
          onClick={() => handleCategoryClick("property insights")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "property insights"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Property Insights
        </button>
        <button
          onClick={() => handleCategoryClick("community")}
          className={`px-4 py-2 rounded-md border ${
            selectedCategory === "community"
              ? "bg-[#001f3f] text-white"
              : "bg-white text-[#001f3f] border-[#001f3f]"
          } hover:bg-[#001f3f] hover:text-white transition-colors duration-300`}
        >
          Community
        </button>
      </div>

      <hr className="my-7 border-t border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {filteredArticles.map((article) => (
          <div
            key={article._id}
            className="hover:shadow-lg transition hover:bg-[#001f3f] group transition-colors duration-300 cursor-pointer"
          >
          <Link href={`/news_articles/${article._id}`}>
            <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden">
              <img
                src={`/images/${article.img}`}
                alt={article.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h2 className="px-2 font-serif text-xl mt-4 mb-2 group-hover:text-white transition-colors duration-300">
              {article.title}
            </h2>
            <p className="px-2 text-sm text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
              {article.publish_date.slice(0, 10)} • Views: {article.view}
            </p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}