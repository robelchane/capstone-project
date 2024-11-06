"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";

export default function PropertyDetail({ params }) {
  const { id } = params;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`/api/properties/${id}`);
      const data = await response.json();
      setProperty(data.property);
    } catch (error) {
      console.error("Failed to fetch property details", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading property details...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <img
        src={`/images/${property.image}`}
        alt={property.name}
        className="w-full h-64 object-cover mb-4"
      />
      <hr className="w-full border-gray-300 my-2" />
      <p className="text-lg text-gray-700">
        <span style={{ color: "#001f3f" }}>$</span>
        {property.price}
      </p>
      <hr className="w-full border-gray-300 my-2" />
      <p className="text-gray-600 mb-4">{property.detail}</p>
      <hr className="w-full border-gray-300 my-2" />
      <p className="text-sm text-gray-500 mb-2">Address: {property.address}</p>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
        <span>{property.bedrooms} Bedrooms</span>
        <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
        <span>{property.bathrooms} Bathrooms</span>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faCar} className="text-gray-600 mr-1" />
        <span>{property.parkingSpaces} Parking Spaces</span>
      </div>

      <p className="text-sm text-gray-500 mb-2">Year Built: {property.yearBuilt}</p>
      <p className="text-sm text-gray-500 mb-2">Square Footage: {property.squareFootage} sq. ft.</p>
      <p className="text-sm text-gray-500 mb-2">Lot Size: {property.lotSize} sq. ft.</p>
      <p className="text-sm text-gray-500 mb-2">Property Type: {property.propertyType}</p>
      <p className="text-sm text-gray-500 mb-2">Status: {property.status}</p>

      {property.isFeatured && (
        <p className="text-sm text-gray-500 mb-2 text-green-500">Featured Property</p>
      )}

      {property.virtualTourLink && (
        <p className="text-sm text-blue-500 mb-2">
          <a href={property.virtualTourLink} target="_blank" rel="noopener noreferrer">
            View Virtual Tour
          </a>
        </p>
      )}

      <p className="text-sm text-gray-500">
        Seller:{" "}
        <a
          href={`mailto:${property.sellerEmail}`}
          className="text-blue-500 hover:underline"
        >
          {property.sellerName} ({property.sellerEmail})
        </a>
      </p>
    </div>
  );
}
