"use client";
import { useEffect, useState } from "react";

export default function SavedPropertiesPage() {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    // Retrieve saved properties from localStorage
    const saved = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSavedProperties(saved);
  }, []); // Add an empty dependency array to run only once

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      {savedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedProperties.map((property) => (
            <div key={property.id} className="p-4 border rounded shadow-md">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-700">{property.description}</p>
              <p className="text-lg text-gray-700">Price: ${property.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved properties found.</p>
      )}
    </div>
  );
}
