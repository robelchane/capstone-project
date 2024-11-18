// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination
// https://www.youtube.com/watch?v=ZFYj7OrTeEs

"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBed, faBath, faHeart } from "@fortawesome/free-solid-svg-icons";
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

  const toggleSaveProperty = (property) => {
    console.log("Heart icon clicked, Here's your property:", property);
    setSavedProperties((prevSaved) => {
      const updated = new Set(prevSaved);

      const propertyExists = [...updated].some(
        (savedProperty) => savedProperty._id === property._id
      );

      if (propertyExists) {
        updated.delete(
          [...updated].find(
            (savedProperty) => savedProperty._id === property._id
          )
        );
        console.log("Property removed from saved properties");
      } else {
        updated.add(property);
        console.log("Property added to saved properties");
      }

      localStorage.setItem("savedProperties", JSON.stringify([...updated]));

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
    <div className="p-5 py-8 px-12 mt-32">
      <h1 className="text-4xl font-serif text-[#001f3f] text-center mb-10">Iconic For Good Reason</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSearch} className="grid grid-cols-5 gap-5 mb-10 max-w-6xl">
          <div>
            <input
              name="minPrice"
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <input
              name="maxPrice"
              type="number"
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
          <div>
            <input
              name="address"
              type="text"
              placeholder="Enter address..."
              value={filters.address}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="col-span-5 flex justify-center items-center">
            <button
              type="submit"
              className="mt-5 bg-[#001f3f] text-white border border-[#001f3f] px-8 py-2 hover:bg-transparent hover:text-[#001f3f] transition-colors duration-300 w-auto"
            >
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </div>
        </form>
      </div>

      {loading && <p>Loading properties...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-7 p-5">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="p-4 border shadow-lg hover:bg-[#001f3f] transition-colors duration-500 group">
              <Link href={`/all-listings/${property._id}`}>
                <img
                  src={`/images/${property.image}`}
                  alt={property.name}
                  className="w-full h-48 object-cover mb-4 cursor-pointer"
                />
                <h2 className="text-xl text-[#001f3f] font-semibold cursor-pointer group-hover:text-white transition-colors duration-500">
                  {property.name}
                </h2>
              </Link>
              <p className="mb-1 text-lg text-gray-700 dark:text-white group-hover:text-white transition-colors duration-500">
                <span className="group-hover:text-white transition-colors duration-500">$</span>
                {property.price}
              </p>
              <p className="text-gray-600 dark:text-white group-hover:text-white transition-colors duration-500">{property.address}</p>
              <p className="text-gray-600 dark:text-white group-hover:text-white transition-colors duration-500">{property.detail}</p>
              <div className="flex items-center mt-1">

                
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1 group-hover:text-white transition-colors duration-500" />
                <span className="group-hover:text-white transition-colors duration-500">{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2 group-hover:text-white transition-colors duration-500" />
                <span className="group-hover:text-white transition-colors duration-500">{property.bathrooms} Bathrooms</span>
                

              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
                  Seller:{" "}
                  <a
                    href={`mailto:${property.sellerEmail}`}
                    className="text-blue-500 hover:underline group-hover:text-white transition-colors duration-500"
                  >
                    {property.sellerName} ({property.sellerEmail})
                  </a>
                </p>
                <button
                  onClick={() => toggleSaveProperty(property)}
                  className={`text-xl ${
                    savedProperties.has(property._id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
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
