"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from "react";

const Card1 = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/ev1.jpg", "/ev2.jpg", "/ev3.jpg"]; // Array of images for the slideshow

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/events.json');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to any duration in milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative">
      {/* Top Image Slideshow Section */}
      <section className="relative h-100">
  <img 
    src={images[currentIndex]} 
    alt="Calgary Events" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <h1 className="text-4xl font-bold text-white text-center">Enjoy Events throughout the year</h1>
  </div>
</section>


      {/* Second Section with ev4.jpg */}
      <section className="relative h-[700px] mt-10">
  <img
    src="/ev4.jpg"
    alt="Special Event"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Unleash the Fun at Calgary Stampede</h2>
      <p className="text-lg md:text-xl mb-6">
      A Must-See Experience for Newcomers to Calgary
      </p>

      {/* Linkable*/}
      <a
        href="https://www.calgarystampede.com" // External link to Calgary Stampede
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security features for external links
        className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
      >
        Learn more
      </a>
    </div>
  </div>
</section>

        {/* explore ongoing and future events Section */}

<section className="py-[100px] bg-[#8B6331]" id="call-to-action"> {/* Background color added */}
  <div className="container mx-auto text-center">
    <h2 className="text-4xl text-white font-bold mb-6">
      Ready to Explore More?
    </h2>
    <a href="https://www.eventbrite.ca/d/canada--calgary/events/" target="_blank" rel="noopener noreferrer" className="bg-[#09090b] text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-[#854d0e] hover:scale-105">
      Explore Now
    </a>
  </div>
</section>

      
    </div>
  );
};

export default Card1;
