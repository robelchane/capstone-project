"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faTrash} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons

export default function SavedPropertiesPage() {
  // State to hold saved properties
  // Initialize with an empty array
  const [savedProperties, setSavedProperties] = useState([]);
  //state to hold comparison
  //Initialize with an empty array
  const [comparison,setComparison] = useState([]);
  

useEffect(() => {
  const saved =JSON.parse(localStorage.getItem("savedProperties")) || [];
  setSavedProperties(saved);
}
, []); // Empty array as the second argument to run once

 const handleDeleteProperty = (property) => {
  setSavedProperties((prevSaved) => {
    const updated = prevSaved.filter(
      (savedProperty) => savedProperty._id !== property._id
    );
    console.log("Property removed from saved properties");

    // Update saved properties in localStorage
    localStorage.setItem("savedProperties", JSON.stringify(updated));

    return updated;
  });
}

// function to handle comparison of properties
// it takes a property as an argument
// it checks if the property is already in the comparison array
// if it is, it removes it
// if it is not, it adds it
// if there are already 2 properties in the comparison array, it does nothing
const handleSelectComparison = (property) => {
  setComparison((prevSelected)=>{
    if(prevSelected.some((p)=>p._id === property._id)){
      return prevSelected.filter((p)=>p._id !== property._id);
    } else if(prevSelected.length < 2){
      return [...prevSelected, property];
    }
    return prevSelected;
  });
};


  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      {/* Check if there are properties selected for comparison */}
      <button
        disable={comparison.length !== 2}
        onClick={() => { window.location.href ='/profile/comparison'}}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "

      > Compare Properties
      </button>
      {/* Check if there are saved properties */}
      {savedProperties.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loop through saved properties */}
          {/* Display each property */}
          {savedProperties.map((property) => (
            <div key={property._id} className="p-10 border rounded shadow-md">
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
                <div className="text-xl text-gray-500">
                  <button onClick={()=> handleDeleteProperty(property)} >
                  <FontAwesomeIcon icon={faTrash} className="text-gray-600 mx-2 hover: text-blue-300 transition-colors duration-200" />
                  </button>
                </div> {/* Closing tag added here */}
              </div>
              {/* Add a button to select the property for comparison */}
              <button
                onClick={() => handleSelectComparison(property)}
                className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                  comparison.some((p) => p._id === property._id)
                    ? "bg-blue-600"
                    : ""
                }`}
              >
                {comparison.some((p) => p._id === property._id)
                  ? "Selected for Comparison"
                  : "Select for Comparison"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved properties found.</p>
      )}
    </div>
  );
}