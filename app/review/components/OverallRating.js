// app/review/components/OverallRating.js
import { useState, useEffect } from "react";

export default function OverallRating({ reviews }) {
    const [overallRating, setOverallRating] = useState(0);

    useEffect(() => {
        const total = reviews.reduce((acc, review) => acc + review.rating, 0);
        setOverallRating((total / reviews.length).toFixed(2));
    }, [reviews]);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-4xl text-yellow-500">⭐{overallRating}</span>
            <span className="text-xl text-gray-600 dark:text-white">({reviews.length} Reviews)</span>
        </div>
    );
}