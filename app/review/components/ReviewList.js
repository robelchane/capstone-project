import { useState } from "react";
import Image from "next/image";

export default function ReviewList({ reviews }) {
    const [filter, setFilter] = useState("Most Recent");
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    // Filtered and sorted reviews
    const sortedReviews = [...reviews].sort((a, b) => {
        if (filter === "Most Recent") return new Date(b.date) - new Date(a.date);
        if (filter === "Highest Rated") return b.rating - a.rating;
        if (filter === "Lowest Rated") return a.rating - b.rating;
    });

    // Pagination logic
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="mt-16">
            {/* Filter Dropdown */}
            <div className="mb-6">
                <label htmlFor="filter" className="mr-2 text-lg font-semibold">Sort by:</label>
                <select
                    id="filter"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    className="border px-4 py-2 rounded-md focus:outline-none"
                >
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                </select>
            </div>

            {/* Review List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentReviews.map((review) => (
                    <div key={review._id} className="p-5 border rounded-lg shadow-sm bg-white">
                        {/* Reviewer Profile */}
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                                {review.photo ? (
                                    <Image
                                        src={`/uploads/${review.photo}`}
                                        alt={review.reviewer}
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="bg-gray-500 w-full h-full flex items-center justify-center text-white">
                                        {review.reviewer.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="ml-3">
                                <p className="text-lg font-semibold">{review.reviewer}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                        </div>

                        {/* Rating and Review Text */}
                        <div className="flex items-center mb-2">
                            <div className="flex text-yellow-500">
                                {'★'.repeat(review.rating)}
                                {'☆'.repeat(5 - review.rating)}
                            </div>
                            <p className="ml-2 text-gray-600 text-sm">{review.rating} / 5</p>
                        </div>

                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-2 py-1 mx-2 bg-black text-white border hover:bg-transparent hover:border-black hover:text-black transition-colors duration-300 rounded-full disabled:opacity-50 disabled:bg-black disabled:text-white"
                >
                    ⬅
                </button>
                <span className="px-1 py-1 mx-2">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 mx-2 bg-black text-white border hover:bg-transparent hover:border-black hover:text-black transition-colors duration-300 rounded-full disabled:opacity-50 disabled:bg-black disabled:text-white"
                >
                    ➡
                </button>
            </div>
        </div>
    );
}