"use client";
import data from "../../public/residenciesData.json"; // Import only JSON data
import Link from "next/link";

export default function Residencies() {
  // Display only three items
  const itemsToDisplay = data.slice(0, 3); // Get the first three items

  return (
    <main className="font-serif overflow-y-auto text-black" id="residencies">
      <div className="flex justify-center font-serif">
        <div className="flex flex-col items-center">
          <span className="text-4xl text-[#001f3f] font-bold mt-5">
            Expertised | Trustworthy | Dedicated
          </span>
          
          {/* Customer Reveiws */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center mb-10">Verified Customer Reviews</h2>
            <div className="flex flex-wrap justify-center mt-4 space-x-4">
              <div className="border p-4 rounded shadow w-80 bg-gradient-to-r from-[#001f3f] to-purple-400 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
                <p className="font-semibold mb-2 text-white text-shadow">Alice Johnson</p>
                <p className="text-white mt-5 mb-5">
                  “Their expert team assisted me in selling my home, and the entire process went smoothly. 
                  Thanks to them, I was able to sell my house for the price I wanted.”
                </p>
              </div>
              <div className="border p-4 rounded shadow w-80 bg-gradient-to-r from-[#001f3f] to-purple-400 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
                <p className="font-semibold mb-2 text-white text-shadow">David Brown</p>
                <p className="text-white mt-5 mb-5">
                  “Their professional consultation eased all my worries about purchasing my first home. 
                  They found me an amazing house that exceeded my expectations.”
                </p>
              </div>
              <div className="border p-4 rounded shadow w-80 bg-gradient-to-r from-[#001f3f] to-purple-400 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
                <p className="font-semibold mb-2 text-white text-shadow">Sophia Kim</p>
                <p className="text-white mt-5 mb-5">
                  “I had such a great experience with Property Pros! 
                  They understood my needs well and provided tailored solutions.”
                </p>
              </div>
              <div className="border p-4 rounded shadow w-80 bg-gradient-to-r from-[#001f3f] to-purple-400 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
                <p className="font-semibold mb-2 text-white text-shadow">James Lee</p>
                <p className="text-white mt-5 mb-5">
                  “Thanks to Property Pros, I quickly found an excellent investment property. 
                  They guided me through every step, making everything feel easy.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Container */}
      <div className="py-16 px-8 relative mt-20">
        {/* Header */}
        <div className="flex flex-col items-start mb-8">
          <p className="text-2xl font-bold" style={{ color: '#001f3f' }}> Best Choices</p>
          <p className="text-3xl font-bold">Popular Residencies</p>
        </div>

        {/* Residency Cards in a Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {itemsToDisplay.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 rounded-lg max-w-xs mx-auto transition-transform duration-300 ease-in hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-blue-200 hover:shadow-lg"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full max-w-xs"
              />
              <span className="text-lg font-semibold text-gray-700">
                <span style={{ color: '#001f3f' }}>$</span>
                {card.price}
              </span>
              <span className="text-xl font-bold text-black">{card.name}</span>
              <span className="text-sm text-gray-500">{card.detail}</span>
            </div>
          ))}
        </div>

        {/* All Listings Button at the bottom */}
        <div className="flex justify-center mt-8">
          <Link href="/all-listings">
            <p className="bg-[#001f3f] text-white px-4 py-2 rounded transition-transform duration-300 ease-in hover:scale-105 hover:bg-blue-700">
              All Listings Property
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
