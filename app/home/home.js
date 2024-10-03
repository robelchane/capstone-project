'use client';

import Link from "next/link";
import SearchBar from "./searchBar";
import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(/background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    clipPath: `polygon(0 0, 100% 0, 100% ${Math.min(100, 100 - scrollY / 8)}%, 0 ${Math.min(100, 100 - scrollY / 8)}%)`,
  };

  return (
    <main className="font-serif overflow-y-auto bg-gray-900 text-white">
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-500 ${scrollY > 0 ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}>
        <div className="flex justify-between text-xl font-serif text-white">
          <div className="flex items-center m-2">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-12 h-12 mr-4 cursor-pointer"
              />
            </Link>
            <p className="font-extrabold text-white text-4xl text-shadow bg-clip-text tracking-widest uppercase">
              Property Pros
            </p>
          </div>
          <div className="flex gap-10 m-2">
            <Link href="/listings">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">
                Listings
              </p>
            </Link>
            <Link href="/seller">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">
                Seller
              </p>
            </Link>
            <Link href="#residencies">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">
                Residencies
              </p>
            </Link>
            <Link href="#value">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">
                Our Values
              </p>
            </Link>
            <Link href="/login">
              <p className="text-white text-shadow hover:scale-110 transition-transform duration-300 text-xl">
                Get Started
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section with Static Background Image */}
      <div className="flex justify-center items-center font-serif relative h-screen">
        <div
          className="relative w-full h-full"
          style={backgroundImageStyle}
        >
          {/* Content over the background */}
          <div className="relative flex flex-col items-center justify-center w-full h-full z-10 mt-5">
            <div className="font-bold text-white text-5xl text-center">
              <p className="text-gray-300">Discover</p>
              <p className="my-2 text-gray-300">Most Suitable</p>
              <p className="text-gray-300">Property</p>
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

