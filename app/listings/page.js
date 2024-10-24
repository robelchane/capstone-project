"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs"; // Clerk's user hook
import Link from "next/link";
import data from "../../public/residenciesData.json";
import Map from "../map/page";

export default function Listings() {
  const { user } = useUser(); // Get the current authenticated user
  const [favorites, setFavorites] = useState([]);

  // Disable scrolling on the body when the component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable body scrolling
    return () => {
      document.body.style.overflow = ""; // Re-enable body scrolling on unmount
    };
  }, []);

  // Function to handle adding a property to favorites
  const handleAddToFavorites = async (residence) => {
    if (!user) {
      alert("Please log in to add favorites."); // Notify user to log in
      return;
    }

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id, // Send the authenticated user ID
          propertyId: residence.id, // The property to be added to favorites
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`${residence.name} has been added to your favorites!`);
        setFavorites([...favorites, residence]);
      } else {
        console.error(data.error);
        alert("Failed to add the property to favorites.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("There was an error adding the property to your favorites.");
    }
  };

  return (
    <main className="font-serif p-8 flex h-screen overflow-hidden mt-12">
      {/* Map Section */}
      <div className="w-1/2 h-full p-4 rounded-t-lg">
        <Map items={data} />
      </div>

      {/* Listings Section */}
      <div className="w-1/2 overflow-y-scroll h-full p-4 overflow-x-hidden">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-yellow-700">Best Choices</h1>
          <h2 className="text-4xl font-bold text-black mt-2">
            Popular Residencies
          </h2>
        </div>

        {/* Listings Cards */}
        <div className="flex flex-col gap-6">
          {data.map((residence) => (
            <div
              key={residence.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-4 flex"
            >
              {/* Image Section */}
              <div className="w-1/3">
                <img
                  src={residence.image}
                  alt={residence.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <Link href={`/residencies/${residence.id}`}>
                    <h3 className="text-xl font-bold text-gray-900">
                      {residence.name}
                    </h3>
                    <h4 className="text-sm text-gray-500">
                      {residence.address}
                    </h4>
                    <p className="text-lg font-semibold text-yellow-700 mt-2">
                      Price: ${residence.price}
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-700 flex items-center">
                        <img
                          src="./bed.png"
                          alt="bed"
                          className="inline-block h-5 w-5 mr-1"
                        />
                        {residence.bedrooms}
                        <span className="ml-1">Bedroom</span>
                      </p>

                      <p className="text-sm text-gray-700 flex items-center p-2">
                        <img
                          src="./bath.png"
                          alt="bath"
                          className="inline-block h-5 w-5 mr-1"
                        />
                        {residence.bathrooms}
                        <span className="ml-1">Bathroom</span>
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Favorite and Contact Buttons */}
                <div className="flex justify-between items-center mt-4 w-full">
                  <button
                    onClick={() => handleAddToFavorites(residence)}
                    className="bg-yellow-700 text-white px-4 py-2 rounded-lg w-full md:w-auto"
                  >
                    Add to Favorites
                  </button>
                  <button className="bg-yellow-700 text-white px-4 py-2 w-full md:w-auto">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
