"use client";
import data from "../../public/residenciesData.json"; // Import only JSON data
import Link from "next/link";

export default function Residencies() {
  // Display only three items
  const itemsToDisplay = data.slice(0, 3); // Get the first three items

  return (
    <main className="font-serif overflow-y-auto text-black" id="residencies">
      {/* Container */}
      <div className="py-16 px-8 relative">
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
            <p className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              All Listings Property
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}