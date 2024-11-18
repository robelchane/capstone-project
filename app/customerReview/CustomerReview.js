'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomerReview() {
  const reviews = [
    {
      name: "Alice Johnson",
      job: "Real estate invester",
      review: "The team at Property Pros are truly exceptional professionals and everything went smoothly during the process of selling my home. My home was able to sell for more than I expected, and the team was there every step of the way to advise me along the way. They helped me be competitive in the market and made the sale stress-free and quick. Thank you so much!",
      image: "/AliceJohnson.jpg",
    },
    {
      name: "David Brown",
      job: "First-time homebuyer consultant",
      review: "I was very anxious and apprehensive about the process of buying my first home, but the Property Pros team put all of my worries to rest. They listened carefully to my budget and needs, found the most suitable home for me, and helped me buy the house I fell in love with on the first visit. I was able to find a home that was even better than I had imagined, so thank you for handling this whole process!",
      image: "/DavidBrown.jpg",
    },
    {
      name: "Sophia Kim",
      job: "Family-focused real estate agent",
      review: "Our experience with Property Pros was amazing, they completely understood our needs and provided customized solutions. As complicated as buying a house is, they always answered my questions quickly and accurately. We were able to find a home that was exactly what we were looking for, and the process was very smooth. Thank you for providing such a great service.",
      image: "/SophiaKim.jpg",
    },
    {
      name: "James Lee",
      job: "Real estate investment consultant",
      review: "I'm fairly experienced in real estate investing, but I've learned so much more with the support of the Property Pros team. They have a deep understanding of market trends and properties, and they were able to find the right investment for me. The first investment property I bought turned out so well that I've continued to work with them ever since. Thanks to this team, I've been able to make even bigger profits.",
      image: "/JamesLee.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextReview = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPreviousReview = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <p className="text-4xl font-serif text-center text-[#001f3f] w-full">Client Testimonials</p>
      
      <div className="flex justify-center items-center w-full max-w-7xl relative overflow-hidden" style={{ height: "700px" }}>
        <button
          onClick={goToPreviousReview}
          className="absolute left-0 bg-[#001f3f] text-white px-3 py-1 border border-[#001f3f] hover:bg-white hover:text-[#001f3f] hover:border-[#001f3f] transition-color duration-300 focus:outline-none"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
        >
          {"<"}
        </button>

        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 40 },
              opacity: { duration: 0.5 },
            }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <div className="w-1/2 gap-10">
              <p className="text-2xl font-serif text-[#001f3f] text-right">
                {reviews[currentIndex].name}
              </p>
              <p className="text-right mt-1 text-gray-500 mb-16">{reviews[currentIndex].job}</p>
              <p className="font-medium text-gray-800 text-right ml-32">{reviews[currentIndex].review}</p>
              <div className="flex flex-col items-end gap-4">
                <Link href="/review">
                  <button className="mt-16 bg-[#001f3f] text-white py-3 px-5 border border-[#001f3f] hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] z-10 transition-colors duration-300">
                    What Our Clients Say
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-full p-24 overflow-hidden">
              <img
                src={reviews[currentIndex].image}
                alt="Client Testimonials Image"
                className="shadow-lg w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNextReview}
          className="absolute right-0 bg-[#001f3f] text-white px-3 py-1 border border-[#001f3f] hover:bg-white hover:text-[#001f3f] hover:border-[#001f3f] transition-color duration-300 focus:outline-none"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

