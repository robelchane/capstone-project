// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

"use client"; 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [address, setAddress] = useState(""); // Store input address
  const [properties, setProperties] = useState(null); // Start with no properties
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleInputChange = (e) => {
    setAddress(e.target.value); // Update address on input change
  };

  const handleSearch = async () => {
    if (!address.trim()) return; // Prevent searching with empty input

    setLoading(true); // Start loading animation
    try {
      const response = await fetch(`/api/properties?address=${encodeURIComponent(address)}`);
      const data = await response.json();
      setProperties(data.properties); // Store fetched properties
    } catch (error) {
      console.error("Failed to fetch properties", error);
      setProperties([]); // Handle error by setting to empty
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (properties) {
    return (
      <div className="flex flex-col items-center mt-10 h-screen">
        <h1 className="text-2xl font-bold mb-6">Properties in "{address}"</h1>

        {properties.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto"
            style={{ maxHeight: "70vh", width: "80%" }}
          >
            {properties.map((property) => (
              <div
                key={property._id}
                className="bg-white p-4 border rounded shadow-md"
              >
                <img
                  src={`/images/${property.image}`}
                  alt={property.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{property.name}</h2>
                <p className="text-lg text-gray-700">${property.price}</p>
                <p className="text-sm text-gray-500">{property.address}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Seller:{" "}
                  <a
                    href={`mailto:${property.sellerEmail}`}
                    className="text-blue-500 hover:underline"
                  >
                    {property.sellerName}
                  </a>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4">No properties found for "{address}".</p>
        )}

        <button
          onClick={() => setProperties(null)} // Reset search
          className="mt-4 bg-black text-white px-4 py-2 rounded border border-white hover:bg-transparent hover:text-white z-10 transition-colors duration-300"
        >
          Search Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex items-center bg-black rounded p-6 w-[850px] opacity-90">
        <FontAwesomeIcon icon={faLocationDot} className="w-6 m-3 text-white" />

        <input
          aria-label="Search location"
          className="w-full px-3 py-2 mr-5 border rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
          placeholder="Find properties by city, province, or full address..."
          value={address}
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="ml-2 bg-black text-white px-4 py-2 rounded border border-white hover:bg-transparent hover:bg-black hover:text-white hover:border-red-500 e z-10 transition-colors duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4">Loading properties...</p>}
    </div>
  );
}
