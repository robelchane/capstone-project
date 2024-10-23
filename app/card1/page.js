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
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 5000 to any duration in milliseconds

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
    <h1 className="text-4xl font-bold text-white text-center">Welcome to Calgary Events & Festivals</h1>
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

      {/* Linkable Button */}
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




      <div className="max-w-3xl mx-auto p-6 text-white">
        {/* Notable Events Section */}
        <section className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Enjoy events throughout the year in the city</h2>
          <p className="mb-4">
            Calgary is known for its vibrant cultural scene and hosts a variety of events and festivals throughout the year. Here are some of the notable ones:
          </p>

        </section>

        {/* Ongoing Events Section */}
        <section className="bg-gray-700 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Ongoing Events</h2>
          {events.length > 0 ? (
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li key={index} className="bg-white text-black shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-600 hover:underline"
                  >
                    More Info
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No events found.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Card1;
