// This Listing Component has all the listings on the right side of the page
// The Map Component is on the left side of the page
// The data is imported from the residenciesData.json file
// The data is mapped to display the listings
// The listings are displayed in a card format
"use client"


import Link from "next/link";
import data from "../../public/residenciesData.json";
import Map from "../map/page";

export default function Listings() {


  return (
    <main className="font-serif p-8 flex h-screen overflow-hidden bg-[#001f3f]"> {/* Prevents scrolling on X-axis and main page */}
      
      {/* Map Section */}
      <div className="w-1/2 h-full">
        <Map items={data}/>
      </div>

      {/* Listings Section */}
      <div className="w-1/2 overflow-y-scroll h-full p-4 overflow-x-hidden"> {/* Ensures no X-axis scroll here */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-300 to-[#FFD700] bg-clip-text">Best Choices</h1>
          <h2 className="text-2xl text-gray-300 mt-2">Popular Residencies</h2>
        </div>

        {/* Listings Card */}
        <div className="flex flex-col gap-6">
          {data.map((residence) => (
            <div
              key={residence.id}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-4 flex"
            >
              {/* Compressed Image */}
              <div className="w-1/3">
                <img
                  src={residence.image}
                  alt={residence.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Details */}
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <Link href={`/residencies/${residence.id}`}>
                    <h3 className="text-xl font-bold text-gray-900">{residence.name}</h3>
                    <h4 className="text-sm text-gray-500">{residence.address}</h4>
                    <p className="text-lg font-semibold text-[#B8860B] mt-2">
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
                        <span className="ml-1">Bedroom</span> {/* Adds padding between the number and text */}
                      </p>

                      <p className="text-sm text-gray-700 flex items-center p-2">
                        <img
                          src="./bath.png"
                          alt="bath"
                          className="inline-block h-5 w-5 mr-1"
                        />
                        {residence.bathrooms}
                        <span className="ml-1">Bathroom</span> {/* Adds padding between the number and text */}
                      </p>
                    </div>
                  </Link>
                </div>

              {/* Contact Button */}
              <div className="absolute bottom-4 right-4">                  
                <button className="bg-[#001f3f] text-gray-100 hover:bg-blue-600 px-4 py-2 rounded-lg">
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
