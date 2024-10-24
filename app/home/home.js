'use client';
import Header from '../header/page'; // Import the Header component
import SearchBar from "./searchBar";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [count, setCount] = useState({ premium: 0, customers: 0, awards: 0 });
  const finalCounts = { premium: 9000, customers: 2000, awards: 20 };

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
      <Header /> {/* Use the Header component */}

      {/* Content Section with Static Background Image */}
      <div className="flex justify-center items-center font-serif relative h-screen">
        <div
          className="relative w-full h-full"
          style={backgroundImageStyle}
        >
          {/* Content over the background */}
          <div className="relative flex flex-col items-center justify-center w-full h-full z-10 mt-20">
            <div className="font-bold text-white text-5xl text-center">
              <p className="text-gray-100 mb-10">Discover Most Suitable Property</p>
            </div>

            <SearchBar />

            <div className="flex justify-between text-4xl mt-20 w-full max-w-xs text-gray-300">
              <p className="mr-4">{count.premium.toLocaleString()}+</p>
              <p className="mr-4">{count.customers.toLocaleString()}+</p>
              <p>{count.awards.toLocaleString()}+</p>
            </div>

            <div className="flex justify-between text-base mt-2 mb-20 w-full max-w-xs text-gray-300">
              <p className="ml-4 mr-10">Premium Product</p>
              <p className="ml-10 mr-6">Happy Customer</p>
              <p className="ml-4">Award Winning</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex justify-center font-serif bg-white text-black p-10 min-h-screen">
        <div className="w-1/2 m-10">
          <img src={"/aboutus.png"} alt="About Us" className="mt-5" />
        </div>

        <div className="flex flex-col w-1/2 m-10">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold mt-5">Where Homes Find Owners</span>
          </div>
          <div className="my-10 text-lg">
            <p className="mb-5">
              With over 20 years of experience in the real estate industry, Property Pros is dedicated to helping clients navigate the complexities of buying and selling homes. We believe that open communication and transparency are essential in building lasting relationships with our clients, allowing us to deliver exceptional results tailored to their specific goals.
            </p>
            <p className="mb-10">
              Our team's extensive knowledge and expertise set us apart in the competitive real estate landscape. With a focus on data-driven decision-making, we conduct thorough market analyses and valuations to ensure our clients make informed choices. Whether buying or selling, clients can trust that Property Pros will guide them with integrity, diligence, and a relentless drive for success.
            </p>
            <span className="text-3xl font-bold">We're Here for You</span>
            <p className="mt-10">
              At Property Pros, we are committed to being your trusted partner throughout your real estate journey. With us, you can feel confident that your needs are our top priority, ensuring a seamless and positive experience as you achieve your real estate goals.
            </p>
          </div>
          {/* Button Section with Flexbox */}
          <div className="flex gap-4">
            <Link href="/contact">
              <button className="rounded mr-5 px-6 py-3 bg-yellow-700 text-white text-lg font-semibold hover:bg-yellow-800 hover:scale-105 transition-transform duration-300">
                Contact Us
              </button>
            </Link>
            <Link href="/listings">
              <button className="rounded px-6 py-3 bg-yellow-700 text-white text-lg font-semibold hover:bg-yellow-800 hover:scale-105 transition-transform duration-300">
                Best Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
