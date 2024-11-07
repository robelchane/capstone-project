"use client";
import { useEffect, useState } from "react";

export default function ComparePage() {
  // State to hold saved properties
  // Initialize with an empty array
  const [propertiesToCompare, setPropertiesToCompare] = useState([]);

  // UseEffect to get the selected properties from localStorage
  // and set the state
  // Run once when the component mounts
  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("comparison")) || [];
    setPropertiesToCompare(selected);
  }, []); // Empty array as the second argument to run once

  if (propertiesToCompare.length != 2) {
    return <p> Please select two properties for comparison</p>;
  }

  // Get the properties to compare
  const [property1, property2] = propertiesToCompare;

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Compare Properties</h1>
      <table className="w-full table auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
              <div className="flex flex-col items-center">
                <img
                  src={`/images/${property1.image}`}
                  alt={property1.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <span>{property1.address}</span>
              </div>
            </th>
            <th className="w-1/2 px-4 py-2 border border-gray-300 text-center">
            <div className="flex flex-col items-center">
            <img
              src={`/images/${property2.image}`}
              alt={property2.name}
              className="w-full h-48 object-cover mb-4"
            />
            <span>{property2.address}</span>
            </div>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.price}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.price}
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.beds}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.beds}
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.baths}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.baths}
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.detail}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.detail}
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.summary}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.summary}
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property1.sellerName} ({property1.sellerEmail})
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                    {property2.sellerName} ({property2.sellerEmail})
                </td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
}
