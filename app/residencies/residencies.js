"use client";
import data from "../../public/residenciesData.json"; // Import only JSON data
import Link from "next/link";

export default function Residencies() {
  // Display only three items
  const itemsToDisplay = data.slice(0, 3); // Get the first three items

  return (
    <main className="overflow-y-auto text-black" id="residencies">
      {/* Container */}
      <div className="py-10 px-8 relative">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[#001f3f] text-4xl font-serif text-center"> Best Choices</p>
        </div>

        {/* Residency Cards in a Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-6">
          {itemsToDisplay.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-lg max-w-lg mx-auto hover:bg-[#001f3f] transition-colors duration-500 group"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full"
              />
              <div className="p-5">
                <div className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-500 mb-1">
                  <span className="text-black group-hover:text-white transition-colors duration-500">$</span>
                  {card.price}
                </div>
                <p className="text-xl font-bold text-black group-hover:text-white transition-colors duration-500 mb-1">{card.name}</p>
                <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500 mb-1">{card.detail}</p>
                </div>
            </div>
          ))}
        </div>

        {/* All Listings Button at the bottom */}
        <div className="flex justify-center mt-16">
          <Link href="/all-listings">
            <p className="bg-[#001f3f] text-white py-3 px-5 border border-[#001f3f] hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] z-10 transition-colors duration-300">
              View All Listings
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
