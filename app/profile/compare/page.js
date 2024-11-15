"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [propertiesToCompare, setPropertiesToCompare] = useState([]);

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("comparison")) || [];
    setPropertiesToCompare(selected);
  }, []);

  const [property1, property2] = propertiesToCompare;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-left">Compare Properties</h1>
      
      {property1 && property2 ? (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
                <div className="flex flex-col items-center">
                  <img
                    src={`/images/${property1.image}`}
                    alt={property1.name}
                    className="w-40 h-40 object-cover mb-2"
                  />
                  <span className="font-bold">{property1.name}</span>
                  <span>{property1.address}</span>
                </div>
              </th>
              <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
                <div className="flex flex-col items-center">
                  <img
                    src={`/images/${property2.image}`}
                    alt={property2.name}
                    className="w-40 h-40 object-cover mb-2"
                  />
                  <span className="font-bold">{property2.name}</span>
                  <span>{property2.address}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Name: {property1.name}</td>
              <td className="px-4 py-2 border border-gray-300">Name: {property2.name}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Price: ${property1.price}</td>
              <td className="px-4 py-2 border border-gray-300">Price: ${property2.price}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Bedrooms: {property1.bedrooms}</td>
              <td className="px-4 py-2 border border-gray-300">Bedrooms: {property2.bedrooms}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Bathrooms: {property1.bathrooms}</td>
              <td className="px-4 py-2 border border-gray-300">Bathrooms: {property2.bathrooms}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Detail: {property1.detail}</td>
              <td className="px-4 py-2 border border-gray-300">Detail: {property2.detail}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Summary: {property1.summary}</td>
              <td className="px-4 py-2 border border-gray-300">Summary: {property2.summary}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Seller Name: {property1.sellerName}</td>
              <td className="px-4 py-2 border border-gray-300">Seller Name: {property2.sellerName}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Seller Email: {property1.sellerEmail}</td>
              <td className="px-4 py-2 border border-gray-300">Seller Email: {property2.sellerEmail}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Square Footage: {property1.squareFootage}</td>
              <td className="px-4 py-2 border border-gray-300">Square Footage: {property2.squareFootage}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Year Built: {property1.yearBuilt}</td>
              <td className="px-4 py-2 border border-gray-300">Year Built: {property2.yearBuilt}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Property Type: {property1.propertyType}</td>
              <td className="px-4 py-2 border border-gray-300">Property Type: {property2.propertyType}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Status: {property1.status}</td>
              <td className="px-4 py-2 border border-gray-300">Status: {property2.status}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Parking Spots: {property1.parkingSpaces}</td>
              <td className="px-4 py-2 border border-gray-300">Parking Spots: {property2.parkingSpaces}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Lot Size: {property1.lotSize}</td>
              <td className="px-4 py-2 border border-gray-300">Lot Size: {property2.lotSize}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Is Featured: {property1.isFeatured}</td>
              <td className="px-4 py-2 border border-gray-300">Is Featured: {property2.isFeatured}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Virtual Tour Link: {property1.virtualTourLink}</td>
              <td className="px-4 py-2 border border-gray-300">Virtual Tour Link: {property2.virtualTourLink}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          Please select two properties for comparison.
        </p>
      )}
    </div>
  );
}
