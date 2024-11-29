// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

"use client"; 
import React, { useState } from "react";
import Link from "next/link";
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
        <h1 className="text-2xl mb-4">Properties in "{address}"</h1>

        {properties.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto"
            style={{ maxHeight: "70vh", width: "80%" }}
          >
            {properties.map((property) => (
              <div
                key={property._id}
                className="bg-white shadow-md"
              >
                <img
                  src={`/images/${property.image}`}
                  alt={property.name}
                  className="w-full h-48 object-cover mb-1"
                />
                <div className="p-4">
                <h2 className="text-xl text-black font-bold mb-2">{property.name}</h2>
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
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4">No properties found for "{address}".</p>
        )}

        <button
          onClick={() => setProperties(null)} // Reset search
          className="mt-4 bg-[#001f3f] text-white px-4 py-2 border border-[#001f3f] hover:bg-transparent hover:text-white hover:border-white z-10 transition-colors duration-300"
        >
          Search Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex items-center w-[850px]">
       {/* <FontAwesomeIcon icon={faLocationDot} className="w-10 m-3 text-black"/> */}

        <input
          aria-label="Search location"
          className="w-full px-3 py-3 mr-1 border bg-white text-black placeholder-gray-500 focus:outline-none transition-all duration-200"
          placeholder="Search by city, province, or full address"
          value={address}
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="px-4 py-3 bg-[#001f3f] text-white border border-[#001f3f] hover:bg-transparent hover:bg-black hover:text-white hover:border-white e z-10 transition-colors duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <Link href="/all-listings">
        <button
          type="button"
          className="text-white text-shadow mt-6 bg-[#001f3f] text-white border border-[#001f3f] px-3 py-2 hover:bg-transparent hover:border-white transition-colors duration-500"
        >
          Explore all
        </button>
      </Link>

      {loading && <p className="mt-4">Loading properties...</p>}
    </div>
  );
}
