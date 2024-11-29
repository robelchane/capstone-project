"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs"; // Importing necessary hooks
import { useState, useEffect } from "react";
import Link from "next/link";
import data from "../../public/residenciesData.json";
import Map from "../map/page";

export default function Listings() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser(); // Getting user state from Clerk
  const [favorites, setFavorites] = useState([]);

  // Disable scrolling on the body when the component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable body scrolling
    return () => {
      document.body.style.overflow = ""; // Re-enable body scrolling on unmount
    };
  }, []);

  // Fetch favorites when the user is signed in
  useEffect(() => {
    const fetchFavorites = async () => {
      if (isSignedIn) {
        const res = await fetch(`/api/favorites?userId=${user.id}`);
        const data = await res.json();
        setFavorites(data); // Assuming the API returns an array of favorite properties
      }
    };

    fetchFavorites();
  }, [isSignedIn, user]); // Dependency array includes isSignedIn and user

  // Function to handle adding a property to favorites
  const handleAddToFavorites = async (residence) => {
    if (!isSignedIn) {
      // Redirect to sign-in page
      router.push("/sign-in?redirectUrl=" + encodeURIComponent(window.location.href)); // Pass the current page URL for redirection after sign-in
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
        // Check if the residence is already in favorites
        if (!favorites.some(fav => fav.id === residence.id)) {
          setFavorites([...favorites, residence]);
        }
        alert(`${residence.name} has been added to your favorites!`);
      } else {
        console.error(data.error);
        alert("Failed to add the property to favorites.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("There was an error adding the property to your favorites.");
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-7 flex h-screen overflow-hidden mt-16">
      {/* Map Section */}
      <div className="w-1/2 h-full py-24 mr-5 p-1">
        <Map items={data} />
      </div>

      {/* Listings Section */}
      <div className="w-1/2 overflow-y-scroll h-full p-4 overflow-x-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-[#001f3f] mt-2 dark:text-white">Best Choices</h1>
        </div>

        {/* Listings Cards */}
        <div className="flex flex-col gap-10">
          {data.map((residence) => (
            <div
              key={residence.id}
              className="bg-white shadow-lg overflow-hidden hover:bg-[#001f3f] transition-colors duration-500 transform flex group"
            >
              {/* Image Section */}
              <div className="w-1/3">
                <img
                  src={residence.image}
                  alt={residence.name}
                  className="cursor-pointer w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="w-2/3 p-4 pl-4 flex flex-col justify-between">
                <div>
                  <Link href={`/residencies/${residence.id}`}>
                    <h3 className="text-xl text-[#001f3f] group-hover:text-white transition-colors duration-500">
                      {residence.name}
                    </h3>
                    <p className="text-sm text-black mt-1 group-hover:text-white transition-colors duration-500">
                      Price: ${residence.price}
                    </p>
                    <h4 className="text-sm mt-1 text-gray-500 group-hover:text-white transition-colors duration-500">
                      {residence.address}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-500 flex items-center group-hover:text-white transition-colors duration-500">
                        <img
                          src="./bed.png"
                          alt="bed"
                          className="inline-block h-5 w-5 mr-1"
                        />
                        {residence.bedrooms}
                        <span className="ml-1">Bedroom</span>
                      </p>

                      <p className="text-sm text-gray-500 flex items-center p-2 group-hover:text-white transition-colors duration-500">
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
                <div className="flex justify-between items-center mt-2 w-full">
                  <button
                    onClick={() => handleAddToFavorites(residence)}
                    className="text-black px-3 py-2 w-full md:w-auto group-hover:text-[#ffcc00] z-10 transition-colors duration-300"
                  >
                    Add to Favorites
                  </button>
                  <button className="text-black px-3 py-2 w-full md:w-auto group-hover:text-[#ffcc00] z-10 transition-colors duration-300">

                    Save Listing
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
