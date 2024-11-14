"use client";

import { useState } from "react";
//import { useUser } from "@clerk/nextjs";
import data from "../../../public/residenciesData.json";
import Map from "../../map/page.js";
import ContactOwner from "../../contactowner/page.js";

export default function PropertyPage({ params }) {
  // Finds the property with the id that matches the id in the params
  const property = data.find((item) => item.id.toString() === params.id);

  // State to store the current image
  const [currentImage, setCurrentImage] = useState(property.image);

  //const user = useUser();

  // Function to handle image click
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <main className="font-serif text-black p-8 flex mt-12">
      {/* Main Content Section */}
      <div className="w-2/3 pr-8">
        <h1 className="text-4xl font-bold text-center">{property.name}</h1>
        <img src={currentImage} alt={property.name} className="max-w-sm w-full h-auto mt-8 rounded-lg object-contain" />

        {/* Image Gallery */}
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
