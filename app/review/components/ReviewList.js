import { useState } from "react";
import Image from "next/image";

export default function ReviewList({ reviews }) {
    const [filter, setFilter] = useState("Most Recent");
    const [ratingFilter, setRatingFilter] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;


    const sortedReviews = [...reviews]
        .filter(review => (ratingFilter === 0 || review.rating === ratingFilter)) 
        .sort((a, b) => {
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
            {/* Filter and Sort Dropdown */}
            <div className="mb-6 flex items-center space-x-4">
                <div className="mr-5">
                    <label htmlFor="filter" className="mr-2 text-lg">Sort by:</label>
                    <select
                        id="filter"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                        className=" cursor-pointer bg-white border px-4 py-2 focus:outline-none dark:text-black hover:border-[#001f3f] transition-color duration-300"
                    >
                        <option>Most Recent</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rated</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ratingFilter" className="mr-2 text-lg">Rating:</label>
                    <select
                        id="ratingFilter"
                        onChange={(e) => setRatingFilter(Number(e.target.value))}
                        value={ratingFilter}
                        className="cursor-pointer bg-white border px-4 py-2 focus:outline-none dark:text-black hover:border-[#001f3f] transition-color duration-300"
                    >
                        <option value={0}>All Ratings</option>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <option key={rating} value={rating}>{rating} Stars</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Review List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentReviews.map((review) => (
                    <div key={review._id} className="cursor-pointer p-5 border shadow-sm bg-white">
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
                                <p className="text-lg font-semibold dark:text-black">{review.reviewer}</p>
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
                    className="px-2 py-1 mx-2 bg-[#001f3f] text-white border dark:border-white dark:text-white hover:bg-transparent hover:border-[#001f3f] hover:text-[#001f3f] transition-colors duration-300 disabled:opacity-50 disabled:bg-black disabled:text-white"
                >
                    {"<"}
                </button>
                <span className="px-1 py-1 mx-2">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 mx-2 bg-[#001f3f] text-white border dark:border-white dark:text-white hover:bg-transparent hover:border-[#001f3f] hover:text-[#001f3f] transition-colors duration-300 disabled:opacity-50 disabled:bg-black disabled:text-white"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}