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
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@clerk/nextjs"; // Correctly import useUser


export default function AllListings() {
  const {user } = useUser(); // Destructure the user object
  const [properties, setProperties] = useState([]); // Holds fetched property listings
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    address: "", // New address filter
  });

  const [savedProperties, setSavedProperties] = useState(new Set()); // Tracks saved properties

  //const { toast } = useToast(); // Destructure the toast function


    // Toggle property save/unsave
    const toggleSaveProperty =  async (property) => {
      console.log("Heart icon clicked, Here's your property:", property);
      setSavedProperties((prevSaved) => {
        const updated = new Set(prevSaved);
        // Check if the property is already saved
        const propertyExists  = [...updated].some(
        (savedProperties) => savedProperties._id === property._id
        );
          // If the property is saved, remove it from saved properties
       if(propertyExists){
          updated.delete(
            [...updated]. find((savedProperty) => savedProperty._id === property._id)
          );
          //toast("Property removed from saved properties", { type: "success" });
        } else {
          // If the property is not saved, add it to saved properties
          updated.add(property);
          console.log("Property added to saved properties");
        }
        // Update saved properties in localStorage jsust for the moment
        localStorage.setItem("savedProperties", JSON.stringify([...updated]));

        return updated;
      });

      // Save the property to the database
      {}
      const response = await fetch("/api/fav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.primaryEmailAddress.emailAddress,
          propertyId: property._id,
        }),

      });


      let results;
      try{
        results = await response.json();
      } catch (error){
        results = {};
      }

      if(response.ok){
        console.log ("Property saved successfully",results);
      } else {
        console.error("Failed to save property", results);
      }





      
    };


    

  // Fetch properties based on current filters
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/properties?${query}`);
      const data = await response.json();
      console.log(data);
      setProperties(data.properties); // Update state with fetched properties
    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Fetch all properties when the component mounts
  useEffect(() => {
    fetchProperties();
  }, []);

  // Handle changes in filter inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handle form submission for filtering properties
  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchProperties(); // Fetch properties with applied filters
  };

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Filter Properties</h1>

      {/* Filter Form */}
      <form onSubmit={handleSearch} className="grid grid-cols-5 gap-4 mb-8">
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
                <span style={{ color: "#001f3f" }}>$</span>
                {property.price}
              </p>
              <p className="text-gray-600">{property.summary}</p>
              <p className="text-sm text-gray-500">{property.address}</p>
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
              </div>
              <div className="flex items-center justify-between space-x-2">
                <button
                  onClick={() => toggleSaveProperty(property)}
                  className={`text-xl ${
                    savedProperties.has(property)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="text-xl text-gray-500">
                  <FontAwesomeIcon icon={faMessage} />
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
