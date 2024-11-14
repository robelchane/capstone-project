"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card1 = () => {
  const [events, setEvents] = useState([]); // State to hold events
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image index
  const images = ["/ev1.jpg", "/ev2.jpg", "/ev3.jpg"]; // Array of images for the slideshow

  // Fetch events from the JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/events.json");
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to any duration in milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

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
    <div className="relative">
      {/* Top Image Slideshow Section */}
      <section className="relative h-[700px] mt-8">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Calgary Events"
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 40 },
              opacity: { duration: 0.5 },
            }}
            className="w-full h-full object-cover mt-10 absolute top-0 left-0"
            style={{ filter: "brightness(0.8)" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl text-shadow text-white text-center">
            Enjoy Events throughout the year
          </h1>
        </div>
      </section>

      {/* Second Section with ev4.jpg */}
      <section className="relative h-[700px]">
        <img
          src="/ev4.jpg"
          alt="Special Event"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl text-shaodw md:text-5xl font-bold mb-4">
              Unleash the Fun at Calgary Stampede
            </h2>
            <p className="text-lg md:text-xl mb-6">
              A Must-See Experience for Newcomers to Calgary
            </p>

            {/* Linkable Button */}
            <a
              href="https://www.calgarystampede.com" // External link to Calgary Stampede
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security features for external links
              className="inline-block bg-black text-white border border-white px-6 py-3 rounded-lg shadow-lg hover:border-red-400 transition-colors duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Explore Ongoing and Future Events Section */}
      <section className="py-[100px] bg-[#8B6331]" id="call-to-action">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white mb-6 lg:mb-0 lg:mr-8">
            <p className="text-lg text-shadow leading-relaxed ml-5">
              Discover the vibrant events happening in Calgary, from cultural festivals to business expos. There’s always something exciting going on in the city, and we invite you to join the fun. Whether you’re looking for family-friendly activities, nightlife adventures, or opportunities to network and connect, Calgary's events cater to everyone. Stay updated on what's happening and immerse yourself in the local culture!
            </p>
          </div>
          <div className="lg:w-1/2 text-center lg:text-right">
            <h2 className="text-4xl text-shadow mb-6 mr-5">
              Ready to Explore<br /> Ongoing and Upcoming Events?
            </h2>
            <div className="flex justify-end"> {/* Centering the button in the right section */}
              <a
                href="https://www.eventbrite.ca/d/canada--calgary/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 bg-[#09090b] text-white border border-white py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:border-red-400 transition-colors duration-300"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card1;