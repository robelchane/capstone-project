"use client";
import { useEffect, useState } from "react";

export default function ComparePage() {
  const [propertiesToCompare, setPropertiesToCompare] = useState([]);

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("comparison")) || [];
    setPropertiesToCompare(selected);
  }, []);

  if (propertiesToCompare.length !== 2) {
    return <p>Please select two properties for comparison.</p>;
  }

  const [property1, property2] = propertiesToCompare;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Compare Properties</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
              <div className="flex flex-col items-center">
                <img src={`/images/${property1.image}`} alt={property1.name} className="w-40 h-40 object-cover mb-2" />
                <span className="font-bold">{property1.name}</span>
                <span>{property1.address}</span>
              </div>
            </th>
            <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
              <div className="flex flex-col items-center">
                <img src={`/images/${property2.image}`} alt={property2.name} className="w-40 h-40 object-cover mb-2" />
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
            <td className="px-4 py-2 border border-gray-300">Detail: {property1.Detail}</td>
            <td className="px-4 py-2 border border-gray-300">Detail: {property2.Detail}</td>
          </tr>
          {/* Add additional property details as rows */}
          <tr>
            <td className="px-4 py-2 border border-gray-300">Summary: {property1.summary}</td>
            <td className="px-4 py-2 border border-gray-300">Summary: {property2.summary}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Seller Name: {property1.sellerName}</td>
            <td className="px-4 py-2 border border-gray-300">Seller Name: {property2.sellerName}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Seller Email: {property1.SellerEmail}</td>
            <td className="px-4 py-2 border border-gray-300">Seller Email: {property2.SellerEmail}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Heating: {property1.heating}</td>
            <td className="px-4 py-2 border border-gray-300">Heating: {property2.heating}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cooling: {property1.cooling}</td>
            <td className="px-4 py-2 border border-gray-300">Cooling: {property2.cooling}</td>
          </tr>
          {/* Add more rows for any other categories you'd like to display */}
        </tbody>
      </table>
    </div>
  );
}
