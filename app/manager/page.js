"use client"; 
import { useState, useEffect } from "react"; 
import Link from "next/link"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Manager() {
  const [properties, setProperties] = useState([]); 
  const [loading, setLoading] = useState(false); 

  // Fetch properties when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/properties");
        const data = await response.json(); 
        setProperties(data.properties); 
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchProperties(); 
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to handle deleting a property
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this property?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/api/properties?id=${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          // Filter out the deleted property from the state
          setProperties(properties.filter((property) => property._id !== id));
        } else {
          console.error("Failed to delete property");
        }
      } catch (error) {
        console.error("Error deleting property", error);
      }
    }
  };

  // Function to determine the status text color
  const getStatusTextColor = (status) => {
    if (status === "available") return "text-green-500";
    if (status === "pending") return "text-yellow-500";
    if (status === "sold") return "text-red-500";
    return "text-gray-500"; // Default color if status is unknown
  };

  return (
    <div className="py-8 px-4 mt-16">
      {/* Loading spinner */}
      {loading && <p>Loading properties...</p>}

      {/* Listings display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id} className="p-4 border rounded shadow-md">
              <img
                src={`/images/${property.image}`} // Adjust this path as needed
                alt={property.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-700">
                <span style={{ color: "#001f3f" }}>$</span>{property.price}
              </p>
              <p className="text-gray-600">{property.detail}</p>
              <p className="text-sm text-gray-500">{property.address}</p>

              {/* Status text */}
              <p className={`text-sm mt-2 ${getStatusTextColor(property.status)}`}>
                {property.status}
              </p>

              {/* Edit and Delete buttons */}
              <div className="flex justify-between mt-4">
                {/* Edit button */}
                <Link href={`/edit-property/${property._id}`} className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faPen} />
                </Link>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(property._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
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
