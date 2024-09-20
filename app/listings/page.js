// This Listing Component has all the listings on the right side of the page
// The Map Component is on the left side of the page
// The data is imported from the residenciesData.json file
// The data is mapped to display the listings
// The listings are displayed in a card format


import Link from "next/link";
import data from "../../public/residenciesData.json";
import Map from "../map/page";
export default function Listings() {

  
  return (
    <main className="p-8 flex h-screen">
      {/* Map Component on the left */}
      <div className="w-1/2">
        {/* Placeholder for Map Component */}
        <Map />
        <div className="w-full h-full  flex items-center justify-center">
        </div>
      </div>

      {/* Listings on the right */}
      <div className="w-1/2 overflow-y-scroll h-full p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Best Choices</h1>
          <h2 className="text-2xl text-gray-700 mt-2">Popular Residencies</h2>
        </div>

        <div className="flex flex-col gap-6">
          {data.map((residence) => (
            <div
              key={residence.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Link href={`/residencies/${residence.id}`}>
                <img
                  src={residence.image}
                  alt={residence.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{residence.name}</h3>
                  <h4 className="text-sm text-gray-500">{residence.address}</h4>
                  <div className="mt-2">
                    <p className="text-lg font-semibold text-orange-500">Price: ${residence.price}</p>
                
                    <p className="text-sm text-gray-700">Bedrooms: {residence.bedrooms}</p>
                    
                    <p className="text-sm text-gray-700">Bathrooms: {residence.bathrooms}</p>
                    <p className="text-sm text-gray-600 mt-2">{residence.detail}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
