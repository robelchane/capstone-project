"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SavedPropertiesPage() {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSavedProperties(saved);
  }, []);

  const handleDeleteProperty = (propertyId) => {
    const updatedProperties = savedProperties.filter(
      (property) => property._id !== propertyId
    );
    setSavedProperties(updatedProperties);
    localStorage.setItem("savedProperties", JSON.stringify(updatedProperties));
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      {savedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedProperties.map((property) => (
            <div key={property._id} className="p-4 border rounded shadow-md">
              <img
                src={`/images/${property.image}`}
                alt={property.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-700 dark:text-white">
                <span style={{ color: "#001f3f" }}>$</span>
                {property.price}
              </p>
              <p className="text-gray-600 dark:text-white">{property.summary}</p>
              <p className="text-sm text-gray-500 dark:text-white">{property.address}</p>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
                <span>{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <button
                onClick={() => handleDeleteProperty(property._id)}
                className="text-red-500 mt-4"
              >
                <FontAwesomeIcon icon={faTrash} /> Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved properties found.</p>
      )}
    </div>
  );
}
