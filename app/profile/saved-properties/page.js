"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function SavedPropertiesPage() {
  const [savedProperties, setSavedProperties] = useState([]);
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSavedProperties(saved);
  }, []);

  const handleSelectProperty = (property) => {
    setSelectedForComparison((prevSelected) => {
      if (prevSelected.some((p) => p._id === property._id)) {
        const updated = prevSelected.filter((p) => p._id !== property._id);
        localStorage.setItem("comparison", JSON.stringify(updated));
        return updated;
      } else if (prevSelected.length < 2) {
        const updated = [...prevSelected, property];
        localStorage.setItem("comparison", JSON.stringify(updated));
        return updated;
      }
      return prevSelected;
    });
  };

  const handleCompareClick = () => {
    if (selectedForComparison.length === 2) {
      router.push("/profile/compare");
    } else {
      alert("Please select 2 properties to compare");
    }
  };

  const handleDeleteProperty = (propertyId) => {
    const updatedProperties = savedProperties.filter(
      (property) => property._id !== propertyId
    );
    setSavedProperties(updatedProperties);
    localStorage.setItem("savedProperties", JSON.stringify(updatedProperties));
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      <button
        disabled={selectedForComparison.length !== 2}
        onClick={handleCompareClick}
        className="bg-blue-500 text-white px-4 rounded-full py-2 mb-6 rounded disabled:bg-gray-400"
      >
        Compare Selected Properties
      </button>

      {savedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedProperties.map((property) => (
            <div key={property._id} className="p-4 border rounded shadow-md">
              <img
                src={`/images/${property.image}`}
                alt={property.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-700 dark:text-white">
                <span style={{ color: "#001f3f" }}>$</span>
                {property.price}
              </p>
              <p className="text-gray-600 dark:text-white">{property.summary}</p>
              <p className="text-sm text-gray-500 dark:text-white">{property.address}</p>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
                <span>{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDeleteProperty(property._id)}
                  className="text-red-500"
                >
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
                <button
                  onClick={() => handleSelectProperty(property)}
                  className={`${
                    selectedForComparison.some((p) => p._id === property._id)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  } px-4 py-1 rounded-full`}
                >
                  {selectedForComparison.some((p) => p._id === property._id)
                    ? "Selected for Comparison"
                    : "Select for Comparison"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved properties found.</p>
      )}
    </div>
  );
}
