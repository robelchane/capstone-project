'use client';

import Link from "next/link";
import SearchBar from "./searchBar";

export default function Home() {
  return (
    <main className="font-serif overflow-y-auto bg-gray-900 text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-3">
        <div className="flex justify-between text-xl font-serif text-white">
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

      {/* Content Section with Static Background Image */}
      <div className="flex justify-center items-center font-serif relative h-screen">
        <div 
          className="relative w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(/background.jpg)`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)' // Dark overlay for the background image
          }}
        >
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

      {/* About Us Section */}
      <div className="mt-20 flex justify-center font-serif bg-white text-black p-10">
        <div className="w-1/2 m-10">
          <img src={"/aboutus.png"} alt="About Us" className="mt-5"/>
        </div>

        <div className="flex flex-col w-1/2 m-10">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold mt-5">Find the best home for all your needs</span>
          </div>
          <div className="my-10 text-lg">
            <p className="mb-5">
              With over 20 years of experience in the real estate industry, Property Pros is dedicated to
              helping clients navigate the complexities of buying and selling homes. Our team of specialists
              is committed to providing personalized service, ensuring that each client's unique needs and aspirations
              are prioritized throughout the entire process. We believe that open communication and transparency are essential
              in building lasting relationships with our clients, allowing us to deliver exceptional results tailored to their specific goals.
            </p>
            <p className="mb-10">
              Our team's extensive knowledge and expertise set us apart in the competitive real estate landscape.
              With a focus on data-driven decision-making, we conduct thorough market analyses and valuations to ensure
              our clients make informed choices. Whether buying or selling, clients can trust that Property Pros will guide
              them with integrity, diligence, and a relentless drive for success.
            </p>
            <span className="text-3xl font-bold">We're Here for You</span>
            <p className="mt-10">
              At Property Pros, we are committed to being your trusted partner throughout your real estate journey.
              With us, you can feel confident that your needs are our top priority, ensuring a seamless and positive experience
              as you achieve your real estate goals.
            </p>
          </div>
        </div>    
      </div>

      {/* Calgary Market Analysis Section */}
    </main>
  );
}
