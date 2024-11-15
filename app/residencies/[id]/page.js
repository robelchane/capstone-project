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
    <main className="text-black p-8 mt-24">
      {/* Top Section: Property Name */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-serif text-[#001f3f]">{property.name}</h1>
      </div>

      {/* Second Section: Image and Info */}
      <div className="flex flex-row justify-between gap-8 p-7">
        {/* Left: Main Image with Navigation */}
        <div className="w-1/2 relative group">
          <img
            src={property.sliderImages[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-[450px] shadow-md"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#001f3f] text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 10 }}
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#001f3f] text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 10 }}
          >
            &gt;
          </button>
        </div>

        {/* Right: Property Information */}
        <div className="w-1/2 ml-10">
          <p className="text-2xl font-serif text-[#001f3f] mb-2">{property.detail}</p>
          <p className="mr-16">{property.summary}</p>
          <p className="text-2xl font-serif text-[#001f3f] mt-12 mb-2">{property.address}</p>
          <div className="flex items-center gap-4 mb-4 ml-1">
            <FontAwesomeIcon icon={faBed} className="text-black" />
              <p className="text-black">{property.bedrooms} Bedrooms</p>
              <FontAwesomeIcon icon={faBath} className="text-black ml-4" />
              <p className="text-black">{property.bathrooms} Bathrooms</p>
          </div>
          <p className="text-2xl font-serif text-[#001f3f] mt-12 mb-2">For Sale</p>
          <p className="text-black ml-1">${property.price}</p>
          <div className="flex justify-end mt-8">
            <p className="mr-16 flex flex-col items-end bg-[#001f3f] text-white px-4 py-2 border border-[#001f3f] mt-12">
              Inspection Open Friday 16 December
            </p>
          </div>
        </div>
      </div>

      {/* Third Section: Map and Contact */}
      <div className="flex flex-row justify-between gap-8 p-7">
        {/* Left: Map */}
        <div className="w-1/2 mr-10">
          <div
            className="relative w-full overflow-hidden shadow-md"
            style={{ height: "450px" }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Map lat={property.latitude} lng={property.longitude} />
            </div>
          </div>
        </div>

        {/* Right: Contact Owner */}
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif text-[#001f3f] mb-4">Contact Owner</h2>
          <ContactOwner property={property} />
        </div>
      </div>
    </main>
  );
}