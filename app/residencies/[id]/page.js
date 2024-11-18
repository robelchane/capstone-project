"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import data from "../../../public/residenciesData.json";
import Map from "../../map/page.js";
import ContactOwner from "../../contactowner/page.js";
import MortgageCalculator from "../../mortgage-calculator/page";

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
    <main className="text-black p-8 flex mt-24">
      {/* Main Content Section */}
      <div className="w-2/3 pr-8">
        <h1 className="text-4xl font-bold text-center">{property.name}</h1>

        {/* **NEED TO FIX ERROR HERE **       
        <img src={currentImage} alt={property.name} className="w-full h-auto mt-10 rounded-lg" />

        {property.sliderImages && property.sliderImages.length > 0 ? (
          <div className="flex gap-4 justify-center mt-6">
            {property.sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image)}
                className="w-20 h-20 object-cover cursor-pointer rounded-lg"
              />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-center">No additional images available.</p>
        )}
        */}

        {/* Property Information */}
        <div className="mt-6">
          <p className="text-2xl font-semibold">
            Price: <span className="text-yellow-700">${property.price}</span>
          </p>
          <p className="mt-2">{property.detail}</p>
        </div>

        {/* Property Summary */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Property Summary</h2>
          <p>{property.summary}</p>
        </div>

        {/* Map Section */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Location</h2>
          <div className="h-64 rounded-lg overflow-hidden">
            <Map lat={property.latitude} lng={property.longitude} />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 w-1/3 bg-gray-100 p-6 rounded-lg h-full">
      <ContactOwner property={property}  />
      </div>
    </main>
  );
}