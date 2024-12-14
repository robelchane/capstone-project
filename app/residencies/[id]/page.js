"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import data from "../../../public/residenciesData.json";
import Map from "../../map/page.js";
import ContactOwner from "../../contactowner/page.js";

export default function PropertyPage({ params }) {
  // Finds the property with the id that matches the id in the params
  const property = data.find((item) => item.id.toString() === params.id);

  // State to manage current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to navigate images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.sliderImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? property.sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="text-black p-16 mt-16">
      {/* Title */}
      <h1 className="text-4xl font-serif text-[#001f3f] mb-10 text-center">{property.name}</h1>

      {/* Main Section: Photos and Information */}
      <div className="flex gap-16">
      {/* Left Section: Photos */}
      <div className="w-1/2 relative group">
        {/* Main Image */}
        <img
          src={property.sliderImages[currentIndex]}
          alt={property.name}
          className="w-full h-full rounded"
        />

        {/* Left Button */}
        {property.sliderImages.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {"<"}
          </button>
        )}

        {/* Right Button */}
        {property.sliderImages.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {">"}
          </button>
        )}
      </div>

        {/* Right Section: Information and Summary */}
        <div className="w-1/2">
          <div className="mb-6 ml-2">
            <p className="text-xl font-serif">
              Price: <span className="text-yellow-700">${property.price}</span>
            </p>
            <p className="mt-2">{property.detail}</p>
          </div>

          <div className="mt-10 ml-2">
            <h2 className="text-xl font-serif mb-2">Property Summary</h2>
            <p>{property.summary}</p>
          </div>
          <div className="mt-10">
            <ContactOwner property={property} />
          </div>
        </div>
      </div>

      {/* Bottom Section: Map and Contact */}
      <div className="flex gap-16 mt-16">
        {/* Map Section */}
          <div className="w-full h-full overflow-hidden">
            <p className="mb-10 text-center text-[#001f3f] text-3xl font-serif">Location</p>
            <Map lat={property.latitude} lng={property.longitude} />
          </div>
      </div>
    </main>
  );
}
