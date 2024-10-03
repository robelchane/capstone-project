'use client'; 

import React, { useState } from 'react';

export default function CustomerReview() {
  const reviews = [
    {
      name: "Alice Johnson",
      review: "The team at Property Pros are truly exceptional professionals and everything went smoothly during the process of selling my home. My home was able to sell for more than I expected, and the team was there every step of the way to advise me along the way. They helped me be competitive in the market and made the sale stress-free and quick. Thank you so much!",
      image: "/AliceJohnson.jpg", 
    },
    {
      name: "David Brown",
      review: "I was very anxious and apprehensive about the process of buying my first home, but the Property Pros team put all of my worries to rest. They listened carefully to my budget and needs, found the most suitable home for me, and helped me buy the house I fell in love with on the first visit. I was able to find a home that was even better than I had imagined, so thank you for handling this whole process!",
      image: "/DavidBrown.jpg",
    },
    {
      name: "Sophia Kim",
      review: "Our experience with Property Pros was amazing, they completely understood our needs and provided customized solutions. As complicated as buying a house is, they always answered my questions quickly and accurately. We were able to find a home that was exactly what we were looking for, and the process was very smooth. Thank you for providing such a great service.",
      image: "/SophiaKim.jpg", 
    },
    {
      name: "James Lee",
      review: "I'm fairly experienced in real estate investing, but I've learned so much more with the support of the Property Pros team. They have a deep understanding of market trends and properties, and they were able to find the right investment for me. The first investment property I bought turned out so well that I've continued to work with them ever since. Thanks to this team, I've been able to make even bigger profits.",
      image: "/JamesLee.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPreviousReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="font-serif flex flex-col justify-center items-center mt-20 mb-20">
      <p className="text-yellow-700 text-2xl font-bold">Proven Results</p>
      <span className="text-3xl font-bold mt-1 mb-10 text-center text-black w-full">Client Testimonials</span>
      <div className="flex justify-center items-center w-full max-w-6xl relative">
        <button
          onClick={goToPreviousReview}
          className="absolute left-0 bg-yellow-700 text-white px-2 py-2 rounded hover:bg-yellow-800 focus:outline-none"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 10 }} 
        >
          {'<'}
        </button>
        
        <div className="w-1/2 p-4 ml-20">
          <p className="text-xl font-bold mb-10 text-black">{reviews[currentIndex].name}</p>
          <p className="text-xl text-gray-800">{reviews[currentIndex].review}</p>
        </div>

        <div className="w-1/2 p-4 mr-20 h-[700px] overflow-hidden">
          <img
            src={reviews[currentIndex].image}
            alt="Client Testimonials Image"
            className="shadow-lg w-full h-full object-cover"
          />
        </div>

        <button
          onClick={goToNextReview}
          className="absolute right-0 bg-yellow-700 text-white px-2 py-2 rounded hover:bg-yellow-800 focus:outline-none"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 10 }} 
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

