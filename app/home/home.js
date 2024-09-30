'use client';

import Link from "next/link";
import SearchBar from "./searchBar";

export default function Home() {
  return (
    <main className="font-serif overflow-y-auto text-white">
      {/* Background Image covering the entire main section */}
      <div 
        className="relative w-full h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `url(/background.jpg)`, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)' 
        }}
      >
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-50 shadow-none p-3 bg-transparent">
          <div className="flex justify-between text-xl font-serif">
            <div className="m-2">
              <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 tracking-widest uppercase">
                Property Pros
              </p>
            </div>
            <div className="flex gap-10 m-2">
              <Link href="/listings">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Listings
                </p>
              </Link>
              <Link href="/seller">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Seller
                </p>
              </Link>
              <Link href="#residencies">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Residencies
                </p>
              </Link>
              <Link href="#value">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Our Values
                </p>
              </Link>
              <Link href="#contact">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Contact Us
                </p>
              </Link>
              <Link href="/login">
                <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section over the Background */}
        <div className="flex justify-center items-center relative h-full mt-20">
          {/* Content over the background */}
          <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
            <div className="font-bold text-white text-6xl gap-5 text-center">
              <p className="text-white">Discover</p>
              <p className="my-2 text-gray-200">Most Suitable</p>
              <p className="text-white">Property</p>
            </div>
            <div className="my-10 text-xl text-center text-gray-300">
              <p>
                Find a variety of properties that suit you very easily.<br />Forget all difficulties in finding a residence for you.
              </p>
            </div>

            <SearchBar />

            <div className="flex justify-between text-4xl mt-10 w-full max-w-xs text-white">
              <p className="mr-4">9,000+</p>
              <p className="mr-4">2,000+</p>
              <p>28+</p>
            </div>

            <div className="flex justify-between text-base mt-2 w-full max-w-xs text-gray-300">
              <p className="ml-4 mr-10">Premium Product</p>
              <p className="ml-10 mr-6">Happy Customer</p>
              <p className="ml-4">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
