// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBed,
  faBath,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function AllListings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    address: "",
  });

  const [savedProperties, setSavedProperties] = useState(new Set());

  const toggleSaveProperty = (id) => {
    setSavedProperties((prevSaved) => {
      const updated = new Set(prevSaved);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  };

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/properties?${query}`);
      const data = await response.json();
      setProperties(data.properties);
    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchProperties();
  };

  return (
    <div className="mt-44 px-4 justify-items-center items-center">
      <h1 className="text-5xl text-[#001f3f] font-serif dark:text-white mb-10 text-center">Iconic for good reason</h1>
      <form onSubmit={handleSearch} className="grid grid-cols-5 gap-5 mb-24 max-w-6xl">
        <div>
          <input
            name="minPrice"
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            className="bg-white border p-2"
          />
        </div>
        <div>
          <input
            name="maxPrice"
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            className="bg-white border p-2"
          />
        </div>
        <div>
          <input
            name="bedrooms"
            type="number"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="bg-white border p-2"
          />
        </div>
        <div>
          <input
            name="bathrooms"
            type="number"
            placeholder="Bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="bg-white border p-2"
          />
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Enter address..."
            value={filters.address}
            onChange={handleChange}
            className="bg-white border p-2"
          />
        </div>
        <div className="col-span-5 flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-[#001f3f] text-white border border-black px-4 py-2 hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] dark:border-white dark:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </form>

      {loading && <p>Loading properties...</p>}

      <div className="mx-auto max-w-8xl px-16">
        <div className="border-t border-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-16 px-4 lg:px-0">
        {properties.length > 0 ? (
          properties.map((property) => (
            <Link href={`/all-listings/${property._id}`} key={property._id}>
              <div className="relative shadow-md hover-zoom hover:bg-[#001f3f] hover:text-white transition-colors duration-300 group">
                {/* Property Image with Overlay Badge */}
                <div className="relative">
                  <img
                    src={`/images/${property.image}`}
                    alt={property.name}
                    className="w-full h-64 object-cover "
                  />
                  <div className="absolute top-2 left-2 bg-white px-2 py-1 shadow-md text-xs font-semibold text-gray-800">
                    Inspection Open Friday 16 December
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <h2 className="text-xl mb-2">{property.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#001f3f] group-hover:text-white dark:text-white transition-colors duration-300">
                      <span>$</span>
                      {property.price}
                  </p>

                  {/* <p className="dark:text-white">{property.summary}</p> */}
                  {/* <p className="text-sm dark:text-white">{property.address}</p> */}


                  {/* Icons for Bedrooms and Bathrooms */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faBed} />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faBath} />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>

                  {/* Seller Information and Save Button */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm">
                      Seller:{" "}
                      <a
                        href={`mailto:${property.sellerEmail}`}
                        className="text-blue-600 hover:underline group-hover:text-white dark:text-white transition-colors duration-300"
                      >
                        {property.sellerName} ({property.sellerEmail})
                      </a>
                    </p>
                    <button
                      onClick={() => toggleSaveProperty(property._id)}
                      className={`text-xl group-hover:text-white transition-colors duration-300 ${
                        savedProperties.has(property._id) ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faHeart}/>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}
