// app/review/page.js
"use client";
import { useState, useEffect } from 'react';
import OverallRating from "./components/OverallRating";
import ReviewList from "./components/ReviewList";
import SearchReviews from "./components/SearchReviews";

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
    const [fade, setFade] = useState(true); // 페이드 효과 상태

    const handlePrev = () => {
        setFade(false); // 페이드 아웃 시작
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? reviewers.length - 1 : prevIndex - 1
            );
            setFade(true); // 페이드 인 시작
        }, 300); // 전환 지속 시간에 맞춰 설정
    };

    const handleNext = () => {
        setFade(false); // 페이드 아웃 시작
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviewers.length - 1 ? 0 : prevIndex + 1
            );
            setFade(true); // 페이드 인 시작
        }, 300); // 전환 지속 시간에 맞춰 설정
    };

    const [reviews, setReviews] = useState([]);
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

    // 리뷰 제출 핸들러 함수 정의
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview),
        });
        if (response.ok) {
            const savedReview = await response.json();
            setReviews([...reviews, savedReview.review]); // 새로운 리뷰 추가
            setNewReview({ reviewer: '', rating: 0, comment: '' }); // 폼 초기화
        } else {
            console.error('Failed to submit review');
        }
    };

    // 리뷰 작성 폼의 입력 값 업데이트 핸들러
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
                            <p className="text-4xl font-serif font-bold leading-relaxed mb-12">“<br/>{reviewers[currentIndex].quote}”</p>
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
                                className="p-1 rounded-full bg-black text-white border border-white dark:border-white dark:text-white hover:bg-transparent hover:text-black hover:border-black transition-color duration-300"
                            >
                                ⬅
                            </button>
                            <span>
                                {currentIndex + 1} / {reviewers.length}
                            </span>
                            <button
                                onClick={handleNext}
                                className="p-1 rounded-full bg-black text-white border border-white dark:border-white dark:text-white hover:bg-transparent hover:text-black hover:border-black transition-color duration-300"
                            >
                                ➡
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 두 부분으로 나눔 */}
            <div className="p-12 mt-32 max-w-8xl mx-auto">
            <h1 className="text-5xl text-center font-semibold mb-16">Reviews</h1>

            <div className="flex">
                <div className="w-full lg:w-2/3 pr-16">
                    <OverallRating reviews={reviews} />
                    <ReviewList reviews={reviews} />
                    {/* <SearchReviews reviews={reviews} /> */}
                </div>
                <div className="w-full lg:w-1/3 bg-white p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-5 dark:text-black">Write a Review</h2>
                    <p className="text-gray-500">Want to leave a review for Property Pros?</p>
                    <p className=" text-gray-500 mb-5">Feel free to write about your experience or comments.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium dark:text-black">Name</label>
                            <input
                                type="text"
                                name="reviewer"
                                value={newReview.reviewer}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-md dark:text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium dark:text-black">Rating</label>
                            <input
                                type="number"
                                name="rating"
                                value={newReview.rating}
                                onChange={handleChange}
                                required
                                min="1"
                                max="5"
                                className="w-full p-3 border rounded-md dark:text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-5 dark:text-black">Comment</label>
                            <textarea
                                name="comment"
                                value={newReview.comment}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-md dark:text-black"
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-black text-white w-full p-5 rounded-full border hover:bg-transparent hover:text-black hover:border-blue-400 transition-colors duration-300">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>

        </div>
    );
}