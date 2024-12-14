import mongoose from "mongoose";

const NewsArticleSchema = new mongoose.Schema({
    title: String,
    category: String,
    content: String,
    summary: String,
    publish_date: Date,
    view: Number,
    img: String,
});

export default mongoose.models.NewsArticle || mongoose.model("NewsArticle", NewsArticleSchema);