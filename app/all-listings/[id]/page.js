// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/

"use client";
import { useState, useEffect } from "react";

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

  return (
    <div className="py-8 px-4 mt-20 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      {loading && <p>Loading property details...</p>}
      {!loading && !property && <p>Property not found.</p>}
      {!loading && property && (
        <>
          {/* Property Title */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h1 className="w-full flex justify-center text-3xl font-bold mb-4">{property.name}</h1>
          </div>

          {/* Property Image */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <img
              src={`/images/${property.image}`}
              alt={property.name}
              className="w-full h-80 object-cover mb-6 rounded-lg shadow-md"
            />
          </div>

          {/* Property Price */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <p className="text-xl text-gray-800 font-semibold mb-6">${property.price}</p>
          </div>

          {/* Listing Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-2">Listing Description</h2>
            <p className="text-base text-gray-700">{property.detail}</p>
            <p className="text-base text-gray-700 mt-2">{property.summary}</p>
          </div>

          {/* Property Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-2">Property Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-semibold">Property Type:</p>
              <p>{property.propertyType}</p>
              <p className="font-semibold">Status:</p>
              <p>{property.status}</p>
              <p className="font-semibold">Square Footage:</p>
              <p>{property.squareFootage} sq. ft.</p>
              <p className="font-semibold">Year Built:</p>
              <p>{property.yearBuilt}</p>
              <p className="font-semibold">Lot Size:</p>
              <p>{property.lotSize} sq. ft.</p>
              <p className="font-semibold">Parking Spaces:</p>
              <p>{property.parkingSpaces}</p>
              <p className="font-semibold">Address:</p>
              <p>{property.address}</p>
            </div>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-2">Features</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-semibold">Bedrooms:</p>
              <p>{property.bedrooms}</p>
              <p className="font-semibold">Bathrooms:</p>
              <p>{property.bathrooms}</p>
            </div>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Seller Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-2">Seller Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-semibold">Seller Name:</p>
              <p>{property.sellerName}</p>
              <p className="font-semibold">Seller Email:</p>
              <a
                href={`mailto:${property.sellerEmail}`}
                className="text-blue-500 hover:underline"
              >
                {property.sellerEmail}
              </a>
            </div>
          </div>

          {/* Virtual Tour Link */}
          {property.virtualTourLink && (
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <p className="text-sm text-blue-500 mb-2">
                <a href={property.virtualTourLink} target="_blank" rel="noopener noreferrer">
                  View Virtual Tour
                </a>
              </p>
            </div>
          )}

          {/* Featured Property */}
          {property.isFeatured && (
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <p className="text-sm text-green-500 mb-2">Featured Property</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
