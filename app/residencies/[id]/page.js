

///https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
//https://www.youtube.com/watch?v=ec3OEG8DXJM&t=574s
"use client";

import { useState } from 'react'; // Import useState from React
import data from '../../../public/residenciesData.json';
import Map from '../../map/page.js';

export default function PropertyPage({ params }) {
  // Finds the property with the id that matches the id in the params
  const property = data.find((item) => item.id.toString() === params.id);

  // State to store the current image
  const [currentImage, setCurrentImage] = useState(property.image);

  // Function to handle image click
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <main className="font-serif text-black">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center ">{property.name}</h1>
        <img src={currentImage} alt={property.name} className="w-1/2 h-auto mx-auto rounded-lg" />

            {/* Image Gallery */}
            {/* Help from ChatGpt*/}
            {property.sliderImages && property.sliderImages.length > 0 ? (
          <div className="flex gap-4 justify-center">
            {property.sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image)}
                className="w-20 h-auto object-cover cursor-pointer"
              />
            ))}
          </div>
        ) : (
          <p>No additional images available.</p>
        )}

        {/* Property Information */}
        <p className="text-lg font-semibold mt-4">
          Price: <span className="text-orange-500">${property.price}</span>
        </p>
        <p>{property.detail}</p>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Property Summary</h2>
          <p>{property.summary}</p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Location</h2>
          <div className="h-64">
            <Map lat={property.latitude} lng={property.longitude} />
          </div>
        </div>
      </div>
    </main>
  );
}
