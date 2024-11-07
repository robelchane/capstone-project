"use client";
import { useEffect, useState } from "react";

export default function ComparePage() {
  // State to hold saved properties
  // Initialize with an empty array
  const [propertiesToCompare, setPropertiesToCompare] = useState([]);

  // UseEffect to get the selected properties from localStorage
  // and set the state
  // Run once when the component mounts
  useEffect(() => {
    const selected =
      JSON.parse(localStorage.getItem("propertiesToCompare")) || [];
    setPropertiesToCompare(selected);
  }, []); // Empty array as the second argument to run once

  if (propertiesToCompare.length != 2) {
    return <p> Please select two properties for comparison</p>;
  }

  // Get the properties to compare
  const [property1, property2] = propertiesToCompare;

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Compare Properties</h1>
      <div className=" grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Property 1  details*/}
        <div className="p-4 border rounded shadow-md">
          <img
            src={`/images/${property1.image}`}
            alt={property1.image}
            className="w-full h-48 object-cover mb-4"
          />
         <h2 className="text-xl font-bold">{property1.name}</h2>
         <p>Price:$ {property1.price}</p>
            <p>Bedrooms: {property1.bedrooms}</p>
            <p>Bathrooms: {property1.bathrooms}</p>
            <p>Address: ${property1.address}</p>
            <p>Desc: $ {property1.description}</p>
            <p>Seller: $ {property1.sellerName}({property1.sellerEmail})</p>
            </div>
            {/* Property 2 details */}
            <div className="p-4 border rounded shadow-md">
              <img
                src={`/images/${property2.image}`}
                alt={property2.image}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">{property2.name}</h2>
              <p>Price:$ {property2.price}</p>
              <p>Bedrooms: {property2.bedrooms}</p>
              <p>Bathrooms: {property2.bathrooms}</p>
              <p>Address: ${property2.address}</p>
              <p>Desc: $ {property2.description}</p>
              <p>Seller: $ {property2.sellerName}({property2.sellerEmail})</p>
              </div>
        </div>
      </div>
  );
}
