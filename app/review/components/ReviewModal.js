import { useState } from "react";
import SearchReviews from "./SearchReviews";
import OverallRating from "./OverallRating";

export default function ReviewModal({ reviews, isOpen, onClose }) {
    const [filteredReviews, setFilteredReviews] = useState(reviews);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-5xl p-8 shadow-lg relative max-h-[90vh] overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    &times;
                </button>

                <div className="flex">
                    {/* Left Section: Overall Rating and Category Ratings */}
                    <div className="w-1/3 pr-8">
                        <div className="text-center mb-4">
                            <span className="text-6xl flex items-center justify-center mt-7 mb-3">
                                    <OverallRating reviews={reviews} />
                            </span>
                            <p className="text-sm text-gray-500 mt-5">
                                Top 10% agent based on client reviews, ratings, and dependable service.
                            </p>
                        </div>

                        {/* Overall Rating Chart */}
                        <div className="mt-8 space-y-2">
                            {[5, 4, 3, 2, 1].map(stars => (
                                <div key={stars} className="flex items-center">
                                    <span className="text-sm text-gray-600 w-5">{stars}</span>
                                    <div className="flex-1 mx-2 h-2 bg-gray-300 overflow-hidden">
                                        <div className="h-2 bg-black" style={{ width: `${stars * 20}%` }}></div>
                                    </div>
                                    <span className="text-sm text-gray-600">{(stars * 0.9).toFixed(1)}</span>
                                </div>
                            ))}
                        </div>

                        {/* Category Ratings with Icons */}
                        <div className="mt-12 space-y-4 font-bold">
                            {[
                                { icon: "🏡", category: "Property Condition", rating: 4.9 },
                                { icon: "📋", category: "Listing Accuracy", rating: 5.0 },
                                { icon: "🔑", category: "Easy Access", rating: 4.8 },
                                { icon: "💬", category: "Communication", rating: 5.0 },
                                { icon: "🌍", category: "Location", rating: 5.0 },
                                { icon: "💵", category: "Value for Investment", rating: 4.9 },
                            ].map((item, index) => (
                                <div key={item.category}>
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center text-sm text-gray-600">
                                            <span className="mr-2">{item.icon}</span>
                                            {item.category}
                                        </span>
                                        <span className="text-sm font-semibold">{item.rating.toFixed(1)}</span>
                                    </div>
                                    {index < 5 && <hr className="my-2 border-gray-300" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Scrollable Section with Fixed Search Bar */}
                    <div className="w-2/3 flex flex-col overflow-y-auto max-h-[90vh] pr-4">
                        {/* Fixed Search Bar */}
                        <div className="sticky top-0 bg-white z-10 pb-4 mb-4 border-b border-gray-200">
                            <SearchReviews reviews={reviews} onSearch={setFilteredReviews} />
                            <div className="flex items-center justify-between mt-2">
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="space-y-6">
                            {filteredReviews.map((review) => (
                                <div key={review._id} className="flex space-x-4 p-4 border-b border-gray-200">
                                    <div className="bg-gray-300 w-12 h-12 overflow-hidden flex items-center justify-center text-white">
                                        {review.photo ? (
                                            <img src={review.photo} alt={review.reviewer} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-lg font-semibold">{review.reviewer.charAt(0)}</span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{review.reviewer}</p>
                                        <div className="flex text-yellow-500 text-sm mb-1">
                                            {'★'.repeat(review.rating)}
                                            {'☆'.repeat(5 - review.rating)}
                                        </div>
                                        <p className="text-gray-700 text-sm">{review.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
