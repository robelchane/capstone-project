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
    <main className="font-serif text-black p-8 flex flex-col lg:flex-row mt-12 gap-8">
      {/* Main Content Section */}
      <div className="lg:w-2/3 w-full pr-8">
        <h1 className="text-4xl font-bold text-center">{property.name}</h1>

        <div className="flex justify-center mt-8">
          <img
            src={currentImage}
            alt={property.name}
            className="max-w-md w-full h-auto rounded-lg object-contain"
          />
        </div>
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

        {/* Property Key Features */}
        <div className="mt-6 flex justify-center flex-col gap-3">
          <h1 className=" text-2xl font-bold">Key Features</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Bedrooms: {property.bedrooms}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Bathroom: {property.bathrooms}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Address: {property.address}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black"> SQFT: {property.sqft}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Built In: {property.yearBuilts}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Parking: {property.sqft}</span>
          </div>

          <div className="font-semibold flex gap-2 items-center bg-green-600 rounded-full p-3 justify-center">
            <span className="text-black">Sqft: {property.sqft}</span>
          </div>
          

          

          </div>
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
        <ContactOwner property={property} />
      </div>
    </main>
  );
}
