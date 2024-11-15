// app/review/page.js
"use client";
import { useState, useEffect } from 'react';
import OverallRating from "./components/OverallRating";
import ReviewList from "./components/ReviewList";
import StarRating from "./components/StarRating";
import ReviewModal from "./components/ReviewModal";

export default function Review() {
    const reviewers = [
        {
            id: 1,
            image: "/reviewer1.jpg",
            quote: "Partnering with Property Pros streamlined our home-buying process and led to exceptional client satisfaction. They provided invaluable guidance at every step.",
            name: "Mandy Rutherford",
            title: "First-time Homebuyer",
            companyLogo: "/companylogo1.png"
        },
        {
            id: 2,
            image: "/reviewer2.jpg",
            quote: "Property Pros’ expertise in the real estate market is unmatched. Their insights on property investments have greatly benefited our portfolio.",
            name: "Steven Emms",
            title: "Real Estate Investor",
            companyLogo: "/companylogo2.png"
        },
        {
            id: 3,
            image: "/reviewer3.jpg",
            quote: "Their commitment to finding the perfect home for each client is remarkable. Property Pros made our relocation experience stress-free and enjoyable.",
            name: "Richard Taylor",
            title: "Relocation Client",
            companyLogo: "/companylogo4.png"
        },
        {
            id: 4,
            image: "/reviewer4.jpg",
            quote: "Working with Property Pros was a game-changer for our business. Their market analysis and guidance have helped us make data-driven decisions with confidence.",
            name: "Tristram Gray",
            title: "Commercial Real Estate Client",
            companyLogo: "/companylogo4.png"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? reviewers.length - 1 : prevIndex - 1
            );
            setFade(true);
        }, 300);
    };

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviewers.length - 1 ? 0 : prevIndex + 1
            );
            setFade(true);
        }, 300);
    };




    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [newReview, setNewReview] = useState({
        reviewer: '',
        rating: 0,
        comment: ''
    });

    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch("/api/review");
            const data = await res.json();
            setReviews(data.reviews);
        }
        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview),
        });
        if (response.ok) {
            const savedReview = await response.json();
            setReviews([...reviews, savedReview.review]);
            setNewReview({ reviewer: '', rating: 0, comment: '' });
        } else {
            console.error('Failed to submit review');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-12 mt-32">

            {/* Review Section */}
            <div 
                className={`flex items-center transition-opacity duration-300 ease-in-out ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Left Section for Reviewer Image */}
                <div className="w-1/3 flex justify-center border-r border-gray-300 pr-8">
                    <div className="w-80 h-auto overflow-hidden">
                        <img
                            src={reviewers[currentIndex].image}
                            alt={reviewers[currentIndex].name}
                            className="object-cover w-full h-full"
                            style={{
                                borderTopLeftRadius: '49%',
                                borderTopRightRadius: '49%',
                                borderBottomLeftRadius: '0',
                                borderBottomRightRadius: '0'
                            }}
                        />
                    </div>
                </div>

                {/* Right Section for Review Content */}
                <div className="w-2/3 pl-8 flex flex-col justify-between">
                    <div className="flex items-start">
                        <div>
                            <p className="text-4xl font-serif text-[#001f3f] dark:text-white leading-relaxed mb-12">“<br/>{reviewers[currentIndex].quote}”</p>
                        </div>
                    </div>

                    {/* Bottom Section for Company Logo and Reviewer Details */}
                    <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center">
                            <img
                                src={reviewers[currentIndex].companyLogo}
                                alt={`${reviewers[currentIndex].name} company logo`}
                                className="w-11 h-11 rounded-full"
                            />
                            <div className="border-l border-gray-300 ml-5 pl-5">
                                <p className="text-sm uppercase">{reviewers[currentIndex].title}</p>
                                <p className="text-base">{reviewers[currentIndex].name}</p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handlePrev}
                                className="px-2 py-1 bg-[#001f3f] text-white border border-[#001f3f] dark:border-white dark:text-white hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] transition-color duration-300"
                            >
                                {"<"}
                            </button>
                            <span>
                                {currentIndex + 1} / {reviewers.length}
                            </span>
                            <button
                                onClick={handleNext}
                                className="px-2 py-1 bg-[#001f3f] text-white border border-[#001f3f] dark:border-white dark:text-white hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] transition-color duration-300"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-12 mt-32 max-w-8xl mx-auto">
            <h1 className="text-4xl text-center text-[#001f3f] dark:text-white font-serif mb-16">Reviews</h1>

            <div className="flex ">
                <div className="w-full lg:w-2/3 pr-16">
                    <OverallRating reviews={reviews} />
                    <ReviewList reviews={reviews} />
                    <button
                    onClick={openModal}
                    className="items-right px-4 py-2 bg-[#001f3f] border text-white shadow-md hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] transition-colors duration-300 dark:text-white dark:border-white"
                    >
                        See All
                    </button>
                    <ReviewModal reviews={reviews} isOpen={isModalOpen} onClose={closeModal} />

                </div>
                <div className="w-full lg:w-1/3 bg-white p-6 border shadow-md">
                    <h2 className="text-2xl mb-5 dark:text-black">Write a Review</h2>
                    <p className="text-gray-500">Want to leave a review for Property Pros?</p>
                    <p className="text-gray-500 mb-5">Feel free to leave your comments or experiences.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium dark:text-black">Name</label>
                            <input
                                type="text"
                                name="reviewer"
                                value={newReview.reviewer}
                                onChange={handleChange}
                                required
                                className="bg-white w-full p-3 border dark:text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium dark:text-black">Rating</label>
                            <StarRating 
                                rating={newReview.rating} 
                                onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium dark:text-black">Comment</label>
                            <textarea
                                name="comment"
                                value={newReview.comment}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="bg-white w-full p-3 border dark:text-black"
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-[#001f3f] text-white w-full p-5 border hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] transition-colors duration-300">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}