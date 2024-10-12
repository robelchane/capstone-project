// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

"use client"; 
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBed, faBath } from "@fortawesome/free-solid-svg-icons";

export default function AllListings() {
  const [properties, setProperties] = useState([]); // State to hold the fetched property listings
  const [loading, setLoading] = useState(false); 
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  // Fetch properties based on filters
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filters).toString(); // Construct query string from filters
      const response = await fetch(`/api/properties?${query}`); // Call the backend API route with filters
      const data = await response.json(); // Parse the response as JSON
      setProperties(data.properties); // Update the properties state with the fetched data
    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Fetch all properties when the component mounts (without filters)
  useEffect(() => {
    fetchProperties(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle changes in filter inputs
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Handle form submission for filtering properties
  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchProperties(); // Fetch properties with the applied filters
  };

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Filter Properties</h1>

      {/* Filter Form */}
      <form onSubmit={handleSearch} className="grid grid-cols-4 gap-4 mb-8">
        <div>
          <input
            name="minPrice"
            type="text"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <input
            name="maxPrice"
            type="text"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <input
            name="bedrooms"
            type="number"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <input
            name="bathrooms"
            type="number"
            placeholder="Bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="col-span-4 flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </form>

      {/* Loading spinner */}
      {loading && <p>Loading properties...</p>}

      {/* Listings display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="p-4 border rounded shadow-md">
              <img
                src={`/images/${property.image}`}
                alt={property.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-700">
                <span style={{ color: '#001f3f' }}>$</span>{property.price}
              </p>
              <p className="text-gray-600">{property.summary}</p>
              <p className="text-sm text-gray-500">{property.address}</p>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
                <span>{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}
