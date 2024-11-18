"use client";
import Image from "next/image";
import Header from '../header/page'; // Import the Header component
import SearchBar from "./searchBar";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [count, setCount] = useState({ premium: 0, customers: 0, awards: 0 });
  const finalCounts = { premium: 9000, customers: 2000, awards: 20 };

  const sections = [
    {
      title: "About Us",
      image: "/about_us.jpg",
      url: "/about",
    },
    {
      title: "Living in Calgary",
      image: "/living_in_calgary.jpg",
      url: "/living-in-calgary",
    },
    {
      title: "Best Choices",
      image: "/best_choices.jpg",
      url: "/listings",
    },
    {
      title: "Get in Touch",
      image: "/get_in_touch.jpg",
      url: "/contact",
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const countUp = (key, target) => {
      let start = 0;
      const duration = 2000; // Duration of counting in milliseconds
      const increment = Math.ceil(target / (duration / 100)); // Increment value for each step
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          setCount((prev) => ({ ...prev, [key]: target }));
        } else {
          setCount((prev) => ({ ...prev, [key]: start }));
        }
      }, 100);
    };

    // Start counting up when the component mounts
    countUp('premium', finalCounts.premium);
    countUp('customers', finalCounts.customers);
    countUp('awards', finalCounts.awards);
  }, []);

  return (
    <main className="overflow-y-auto text-white">
      <Header /> {/* Use the Header component */}

      {/* Content Section with Background Video */}
      <div className="flex justify-center items-center font-serif relative h-screen">

        <img
          className="absolute top-0 left-0 mt-2 w-full h-full opacity-95 object-cover"
          src="/pic1.png"
        ></img>

        {/* Content over the background */}
        <div className="relative flex flex-col items-center justify-center w-full h-full z-10 mt-20">
          <div className="text-white text-6xl text-center">
            <p className="text-white mt-36">Discover Most Suitable Property</p>
          </div>

          <SearchBar />

          <div className="flex justify-between text-3xl mt-20 w-full max-w-xs text-white">
            <p className="mr-4">{count.premium.toLocaleString()}+</p>
            <p className="mr-4">{count.customers.toLocaleString()}+</p>
            <p>{count.awards.toLocaleString()}+</p>
          </div>

          <div className="flex justify-between text-base mt-2 mb-20 w-full max-w-xs text-white">
            <p className="ml-4 mr-10">Premium Product</p>
            <p className="ml-10 mr-6">Happy Customer</p>
            <p className="ml-4">Award Winning</p>
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>
      </div>

      <div className="flex flex-col justify-center bg-white text-[#001f3f] min-h-screen space-y-10 mt-16">
          <div className="overflow-hidden">
            <p className="text-4xl font-serif text-center mt-32 mb-5">Leaders in prestige property</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
              {sections.map((section) => (
                <Link href={section.url} key={section.title}>
                  <div className="mt-5 flex flex-col items-center cursor-pointer overflow-hidden group hover:bg-[#001f3f] transition duration-500">
                    <Image
                      src={section.image}
                      alt={section.title}
                      className="object-cover w-full"
                      width={300}
                      height={500}
                    />
                    <div className="p-10 flex flex-col items-center">
                      <h2 className="font-serif text-xl mt-2 w-full mb-1 text-gray-800 group-hover:text-white transition duration-500">
                        {section.title}
                      </h2>
                      {/* Animated Border */}
                      <div className="w-full h-0.5 bg-transparent group-hover:bg-white transition-all duration-500 mt-1 mb-3">
                        <div className="h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/home-background-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-5xl mb-16">Unmatched Expertise <br/>in Property Excellence</h1>
              <p className="text-lg max-w-xl mb-8">
                With a legacy of unrivaled experience and local knowledge, Property Pros delivers consistently outstanding results. Our commitment to excellence in prestige property drives tailored strategies and remarkable outcomes for each client.
              </p>
            </div>
          </section>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col justify-center bg-white text-black min-h-screen space-y-10 mt-16">
          <div className="flex w-full justify-between items-center p-7 gap-7">
            
            {/* Left Section */}
            <div className="relative w-1/2 h-[500px] overflow-hidden">
              <div className="w-full h-full overflow-hidden">
                <img
                  src="/home1.jpg"
                  alt="Home Image 1"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Always visible title */}
              <div className="absolute top-10 left-10 text-white z-20">
                <span className="text-4xl font-serif text-shadow">Where Homes Find Owners</span>
              </div>
              {/* Hidden content that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-40 hover:bg-opacity-60">
                <p className="text-lg text-center text-shadow px-20 mb-6">
                  With over 20 years of experience in the real estate industry, Property Pros is dedicated to helping clients navigate the complexities of buying and selling homes.
                </p>
                <Link href="/about">
                  <button className="bg-[#001f3f] text-white py-3 px-6 border border-[#001f3f] hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative w-1/2 h-[500px] overflow-hidden">
              <div className="w-full h-full overflow-hidden">
                <img
                  src="/home2.jpg"
                  alt="Home Image 2"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Always visible title */}
              <div className="absolute top-10 left-10 text-white z-20">
                <span className="text-4xl font-serif text-shadow">We're Here for You</span>
              </div>
              {/* Hidden content that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-40 hover:bg-opacity-60">
                <p className="text-lg text-center px-20 mb-6">
                  Our team's extensive knowledge and expertise set us apart in the competitive real estate landscape. Trust us to guide you with integrity and diligence.
                </p>
                <Link href="/all-listings">
                  <button className="bg-[#001f3f] text-white py-3 px-6 border border-[#001f3f] hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
