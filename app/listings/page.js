"use client";
import { useState, useEffect } from 'react';
import { useUser, SignIn, RedirectToSignIn } from '@clerk/clerk-react'; // Import Clerk hooks
import Link from "next/link";
import data from "../../public/residenciesData.json";
import Map from "../map/page";

export default function Listings() {
  const { user, isSignedIn } = useUser(); // Get user data and signed-in status from Clerk
  const [favorites, setFavorites] = useState([]);

  // Disable scrolling on the body when the component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable body scrolling
    return () => {
      document.body.style.overflow = ''; // Re-enable body scrolling on unmount
    };
  }, []);

  // Function to handle adding a property to favorites
  const handleAddToFavorites = (residence) => {
    if (!isSignedIn) {
      // If the user is not signed in, show the SignIn component
      return <RedirectToSignIn />;
    }

    // Check if the property is already in favorites
    if (!favorites.some(fav => fav.id === residence.id)) {
      setFavorites([...favorites, residence]);
      alert(`${residence.name} has been added to your favorites!`);
    } else {
      alert(`${residence.name} is already in your favorites.`);
    }
  };

  // Save favorites to localStorage (optional for persistence)
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <main className="font-serif p-8 flex h-screen overflow-hidden mt-12"> {/* Takes full screen height */}
      
      {/* Map Section */}
      <div className="w-1/2 h-full p-4 rounded-t-lg">
        <Map items={data} />
      </div>

      {/* Listings Section */}
      <div className="w-1/2 overflow-y-scroll h-full p-4 overflow-x-hidden"> {/* Scroll only within listings */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-yellow-700">Best Choices</h1>
          <h2 className="text-4xl font-bold text-black mt-2">Popular Residencies</h2>
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
                    <h3 className="text-xl font-bold text-gray-900">{residence.name}</h3>
                    <h4 className="text-sm text-gray-500">{residence.address}</h4>
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
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleAddToFavorites(residence)}
                    className="bg-yellow-700 text-white px-4 py-2 rounded-lg"
                  >
                    Add to Favorites
                  </button>
                  <button className="bg-yellow-700 text-white px-4 py-2">
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
