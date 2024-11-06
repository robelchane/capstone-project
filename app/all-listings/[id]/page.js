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
        className="w-full h-80 object-cover mb-4"
      />
      <hr className="w-full border-gray-300 my-4" />
      <p className="text-lg text-gray-700 font-bold">
        <span style={{ color: "#001f3f" }}>$</span>
        {property.price}
      </p>
      <hr className="w-full border-gray-300 my-4" />
      <p className="text-gray-600 mb-4">{property.detail}</p>
      <hr className="w-full border-gray-300 my-4" />
      <p className="text-sm text-gray-500 mb-2 font-bold">Address:</p>
      <p className="text-sm text-gray-600 mb-4">{property.address}</p>
      <hr className="w-full border-gray-300 my-4" />

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-2" />
        <span className="font-bold">{property.bedrooms} Bedrooms</span>
        <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
        <span className="font-bold">{property.bathrooms} Bathrooms</span>
      </div>
      <hr className="w-full border-gray-300 my-4" />

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faCar} className="text-gray-600 mr-2" />
        <span className="font-bold">{property.parkingSpaces} Parking Spaces</span>
      </div>
      <hr className="w-full border-gray-300 my-4" />

      <p className="text-sm text-gray-500 mb-2 font-bold">Year Built:</p>
      <p className="text-sm text-gray-600 mb-4">{property.yearBuilt}</p>
      <hr className="w-full border-gray-300 my-4" />

      <p className="text-sm text-gray-500 mb-2 font-bold">Square Footage:</p>
      <p className="text-sm text-gray-600 mb-4">{property.squareFootage} sq. ft.</p>
      <hr className="w-full border-gray-300 my-4" />

      <p className="text-sm text-gray-500 mb-2 font-bold">Lot Size:</p>
      <p className="text-sm text-gray-600 mb-4">{property.lotSize} sq. ft.</p>
      <hr className="w-full border-gray-300 my-4" />

      <p className="text-sm text-gray-500 mb-2 font-bold">Property Type:</p>
      <p className="text-sm text-gray-600 mb-4">{property.propertyType}</p>
      <hr className="w-full border-gray-300 my-4" />

      <p className="text-sm text-gray-500 mb-2 font-bold">Status:</p>
      <p className="text-sm text-gray-600 mb-4">{property.status}</p>
      <hr className="w-full border-gray-300 my-4" />

      {property.isFeatured && (
        <p className="text-sm text-green-500 mb-4 font-bold">Featured Property</p>
      )}

      {property.virtualTourLink && (
        <p className="text-sm text-blue-500 mb-4">
          <a
            href={property.virtualTourLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            View Virtual Tour
          </a>
        </p>
      )}

      <p className="text-sm text-gray-500 mb-2 font-bold">Seller:</p>
      <p className="text-sm text-gray-600">
        <a
          href={`mailto:${property.sellerEmail}`}
          className="text-blue-500 hover:underline font-bold"
        >
          {property.sellerName} ({property.sellerEmail})
        </a>
      </p>
    </div>
  );
}
