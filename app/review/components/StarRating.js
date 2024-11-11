// app/review/components/StarRating.js
import { useState } from "react";

export default function StarRating({ rating, onRatingChange }) {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => onRatingChange(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        className={`cursor-pointer text-3xl ${
                            starValue <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
                        }`}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}
