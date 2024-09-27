"use client";
import { useState } from "react";
import data from "../../public/residenciesData.json"; // Import only JSON data

export default function Residencies() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage the current slide index
  const itemsPerSlide = 4; // Number of items to display per slide

  // Calculate the number of slides needed
  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  // Function to handle navigation to the previous slide
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Function to handle navigation to the next slide
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the items to display in the current slide
  const currentItems = data.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <main className="font-serif overflow-y-auto text-black" id="residencies">
        {/* Container */}
        <div className="py-16 px-8 relative">
          {/* Header */}
          <div className="flex flex-col items-start mb-8">
          <p className="text-2xl font-bold" style={{ color: '#001f3f' }}> Best Choices</p>
            <p className="text-3xl font-bold">Popular Residencies</p>
          </div>

        {/* Slider Container */}
        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrevSlide}
            className="text-blue-500 bg-white px-4 py-2 rounded shadow-md hover:shadow-lg cursor-pointer absolute left-0 z-10"
          >
            &lt;
          </button>

          {/* Residency Cards */}
          <div className="flex gap-8 overflow-hidden mx-auto">
            {currentItems.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 rounded-lg max-w-xs mx-auto transition-transform duration-300 ease-in hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-blue-200 hover:shadow-lg"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full max-w-xs"
                />
                <span className="text-lg font-semibold text-gray-700">
                <span style={{ color: '#001f3f' }}>$</span>
                  {card.price}
                </span>
                <span className="text-xl font-bold text-black">{card.name}</span>
                <span className="text-sm text-gray-500">{card.detail}</span>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextSlide}
            className="text-blue-500 bg-white px-4 py-2 rounded shadow-md hover:shadow-lg cursor-pointer absolute right-0 z-10"
          >
            &gt;
          </button>
        </div>
      </div>
    </main>
  );
}