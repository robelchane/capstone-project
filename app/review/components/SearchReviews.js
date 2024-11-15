import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchReviews({ reviews }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredReviews = reviews.filter(review =>
        review.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-8">
            <div className="relative mb-4 ml-1 mr-1">
                <input 
                    type="text"
                    placeholder="Search reviews"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white w-full p-3 border border-gray-300 pl-10"
                />
                <FaSearch className="absolute left-3 top-4 text-gray-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 max-w-full mx-auto">
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                        <div key={review._id} className="p-5 border shadow-sm bg-white">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                                    {review.photo ? (
                                        <img
                                            src={`/uploads/${review.photo}`}
                                            alt={review.reviewer}
                                            className="object-cover w-full h-full"
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

                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-500">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>
                                <p className="ml-2 text-gray-600 text-sm">{review.rating} / 5</p>
                            </div>

                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center col-span-full">No reviews match your search.</p>
                )}
            </div>
        </div>
    );
}
