'use client';

import Link from "next/link";
import SearchBar from "./searchBar";
import { useEffect, useState } from "react";
// pages/_app.js




export default function Home() {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-serif overflow-y-auto text-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md p-3"  style={{ backgroundColor: "#001f3f" }}>
        <div className="flex justify-between text-xl font-serif text-white">
          <div className="m-2">
            <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 to-blue-300 tracking-widest uppercase">
              Property Pros
            </p>
          </div>
          <div className="flex gap-10 m-2">
            <Link href= "/listings">
            <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">Listings</p>
            </Link>
            <Link href="#residencies">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Residencies
              </p>
            </Link>
            <Link href="#value">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Our Values
              </p>
            </Link>
            <Link href="#contact">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Contact Us
              </p>
            </Link>
            <Link href="/signup">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Get Started
              </p>
            </Link>
            <Link href="/login">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center font-serif relative h-screen mt-20">
        <div className="relative w-full h-full overflow-hidden">
          {/* Image Slider */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentImageIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7, 
                zIndex: 0, 
              }}
            />
          ))}
          {/* Content over the background */}
          <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
            <div className="font-bold text-black text-6xl gap-5 text-center">
              <p>Discover</p>
              <p className="my-2 text-shadow text-gray-200">Most Suitable</p>
              <p>Property</p>
            </div>
            <div className="my-10 text-xl text-center">
              <p>
                Find a variety of properties that suit you very easily.<br/>Forget all difficulties in finding a residence for you.
              </p>
            </div>

            <SearchBar />

            <div className="flex justify-between text-4xl mt-10 w-full max-w-xs">
              <p className="mr-4 text-shadow">9,000+</p>
              <p className="mr-4 text-shadow">2,000+</p>
              <p className="text-shadow">28+</p>
            </div>

            <div className="flex justify-between text-base-10 mt-2 w-full max-w-xs">
              <p className="ml-4 mr-10 text-shadow">Premium Product</p>
              <p className="ml-10 mr-6 text-shadow">Happy Customer</p>
              <p className="ml-4 text-shadow">Award Winning</p>
            </div>
          </div>

          <div className="flex justify-between text-base mb-10">
            <p>Premium Product</p>
            <p>Happy Customer</p>
            <p>Award Winning</p>
          </div>
        </div>
      </div>
    </main>
  );
}

