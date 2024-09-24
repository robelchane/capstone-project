'use client';

import Link from "next/link";
import SearchBar from "./searchBar";
import { useEffect, useState } from "react";

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
            <Link href="#get-start">
              <p className="transition-transform transform hover:scale-110 hover:text-transparent hover:underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-[#FFD700]">
                Get started
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
      <div className="flex justify-center font-serif mt-20">
        <div className="w-1/2 m-10">
          <div className="font-bold text-black m-5 text-5xl gap-5">
            <p>Discover</p>
            <p className="my-2">Most Suitable</p>
            <p>Property</p>

          </div>
          <div className="my-10 text-lg">
            <p>Find a variety of properties that suit you very easilty
            Forget all difficulties in finding a residence for you </p>
          </div>
          
          <SearchBar />
         
          <div className="flex justify-between text-4xl mt-10">
            <p>
              9,000 <span className="text-orange-500">+</span>
            </p>
            <p>
              2,000 <span className="text-orange-500">+</span>
            </p>
            <p>
              28 <span className="text-orange-500">+</span>
            </p>
          </div>

          <div className="flex justify-between text-base mb-10">
            <p>Premium Product</p>
            <p>Happy Customer</p>
            <p>Awards Winning</p>
          </div>
        </div>

        <div className="w-1/3 m-10 ">
          <img src={"/home.png"} alt="Profile picture" />
        </div>
      </div>
    </main>
  );
}

