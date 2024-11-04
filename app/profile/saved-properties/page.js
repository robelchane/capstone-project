"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook

export default function SavedPropertiesPage() {
  const { user, isSignedIn } = useUser(); // Get the user from Clerk
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      if (isSignedIn) {
        try {
          const res = await fetch(`/api/favorites?userId=${user.id}`);
          const data = await res.json();
          setSavedProperties(data); // Assuming the API returns an array of properties
        } catch (error) {
          console.error("Error fetching saved properties:", error);
        }
      }
    };

    fetchSavedProperties();
  }, [isSignedIn, user]);

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
      {savedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold">{property.name}</h2>
              <p className="text-gray-700">{property.address}</p>
              <p className="text-yellow-700 font-semibold mt-2">${property.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No saved properties yet.</p>
      )}
    </div>
  );
}
