// Reference
// https://webdev2.warsylewicz.ca/week-8/fetching-data
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://rajasekar.dev/blog/api-design-filtering-searching-sorting-and-pagination

"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";

export default function PropertyDetail({ params }) {

  const router = useRouter();

  const handleButtonClick = () => {
      router.push('/contact');
    };

  const { id } = params;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`/api/properties/${id}`);
      const data = await response.json();
      setProperty(data.property);
    } catch (error) {
      console.error("Failed to fetch property details", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-32">
      {loading && <p className="text-center mt-32 mb-32">Loading property details...</p>}
      {!loading && !property && <p className="text-center">Property not found.</p>}
      {!loading && property && (
        <>
          {/* Property Title */}
          <div>
            <h1 className="w-full flex justify-center text-4xl font-serif text-[#001f3f] dark:text-white mb-4">{property.name}</h1>
          </div>

          {/* Property Image */}
          <div className="bg-white overflow-hidden relative px-10 py-5 w-full h-[95vh]">
            <div className="w-full h-full overflow-hidden">
              <img
                src={`/images/${property.image}`}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* 3 Sections Below Image */}
          <div className="flex bg-white justify-between mt-5 px-5 gap-6 mb-16">
            {/* Left Section */}
            <div className="bg-white p-6 flex flex-col items-left w-1/3">
              <p className="text-3xl text-black font-serif mb-5">{property.address}</p>
              <div className="flex items-center mt-2 text-base">
                <FontAwesomeIcon icon={faBed} className="text-gray-600 mr-1" />
                <span>{property.bedrooms} Bedrooms</span>
                <FontAwesomeIcon icon={faBath} className="text-gray-600 mx-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <hr className="my-4 border-t-2 border-gray-500" />
              <p className="text-xl font-bold mb-2">For Sale</p>
              <p className="text-black text-2xl">${property.price}</p>
              <button 
                onClick={handleButtonClick}
                className="bg-[#001f3f] text-white px-4 py-2 border border-[#001f3f] mt-4 hover:bg-transparent hover:text-[#001f3f] transition-colors duration-300"
              >
                Enquire Now
              </button>
            </div>

            {/* Center Section */}
            <div className="bg-white p-6 w-2/5 ml-10">
              <h2 className="text-2xl text-black font-serif mb-4">Seller Info</h2>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-black font-semibold">Seller Name:</p>
                <p className="text-black">{property.sellerName}</p>
                <p className="text-black font-semibold">Seller Email:</p>
                <a
                  href={`mailto:${property.sellerEmail}`}
                  className="text-blue-500 hover:underline dark:text-blue-500"
                >
                  {property.sellerEmail}
                </a>
              </div>
              <hr className="my-4 border-t-2 border-gray-500" />
              <h2 className="text-2xl text-black font-serif mt-5">Property Summary</h2>
              <h2 className="text-lg text-[#001f3f] font-serif my-4">{property.detail}</h2>
              <p className="text-base text-gray-700 mt-4">{property.summary}</p>
            </div>
            

            {/* Right Section */}
            <div className="bg-white p-6 w-2/5 ml-12">
              <h2 className="text-2xl text-black font-serif mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-black font-semibold">Property Type:</p>
                <p className="text-black">{property.propertyType}</p>
                <p className="text-black font-semibold">Status:</p>
                <p className="text-black">{property.status}</p>
                <p className="text-black font-semibold">Square Footage:</p>
                <p className="text-black">{property.squareFootage} sq. ft.</p>
                <p className="text-black font-semibold">Year Built:</p>
                <p className="text-black">{property.yearBuilt}</p>
                <p className="text-black font-semibold">Lot Size:</p>
                <p className="text-black">{property.lotSize} sq. ft.</p>
                <p className="text-black font-semibold">Parking Spaces:</p>
                <p className="text-black">{property.parkingSpaces}</p>
              </div>
              {/* Additional Images Section */}
              {/*
              <div className="mt-6">
                <img src={`/images/${property.additionalImage1}`} alt="Additional Image 1" className="w-full h-40 object-cover mb-4" />
                <img src={`/images/${property.additionalImage2}`} alt="Additional Image 2" className="w-full h-40 object-cover" />
              </div>
              */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}