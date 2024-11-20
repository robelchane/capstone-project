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
    <div className="p-12 py-8 px-10 mt-24">
      <h1 className="text-2xl font-bold mb-4">Filter Properties</h1>
      <form onSubmit={handleSearch} className="grid grid-cols-5 gap-4 mb-8">
        <div>
          <input
            name="minPrice"
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            className="border p-2 w-full rounded-full"
          />
        </div>
        <div>
          <input
            name="maxPrice"
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            className="border p-2 w-full rounded-full"
          />
        </div>
        <div>
          <input
            name="bedrooms"
            type="number"
            placeholder="Bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="border p-2 w-full rounded-full"
          />
        </div>
        <div>
          <input
            name="bathrooms"
            type="number"
            placeholder="Bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="border p-2 w-full rounded-full"
          />
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Enter address..."
            value={filters.address}
            onChange={handleChange}
            className="border p-2 w-full rounded-full"
          />
        </div>
        <div className="col-span-5 flex justify-center items-center">
          <button
            type="submit"
            className="bg-black text-white border border-white px-4 py-2 rounded hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300 w-full"
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </form>

      {loading && <p>Loading properties...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="p-4 border rounded shadow-md">
              <Link href={`/all-listings/${property._id}`}>
                <img
                  src={`/images/${property.image}`}
                  alt={property.name}
                  className="w-full h-48 object-cover mb-4 cursor-pointer"
                />
                <h2 className="text-xl font-bold mb-2 cursor-pointer">
                  {property.name}
                </h2>
              </Link>
              <p className="text-lg text-gray-700 dark:text-white">
                <span style={{ color: "#001f3f" }}>$</span>
                {property.price}
              </p>
              <p className="text-gray-600 dark:text-white">{property.detail}</p>
              <p className="text-sm text-gray-500 dark:text-white">{property.address}</p>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
                <span>{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500">
                  Seller:{" "}
                  <a
                    href={`mailto:${property.sellerEmail}`}
                    className="text-blue-500 hover:underline"
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
