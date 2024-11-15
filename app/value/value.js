"use client";
import { useState, useRef, useEffect } from "react";

export default function Value() {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const imageRef = useRef(null);
  const [fixedHeight, setFixedHeight] = useState('auto');

  useEffect(() => {
    // Set the initial height based on the image's height
    if (imageRef.current) {
      setFixedHeight(`${imageRef.current.clientHeight}px`);
    }
  }, []);

  const handleMouseEnter = (dropdown) => {
    setHoveredDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <main className="overflow-y-auto text-black" id="value">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-serif text-[#001f3f] text-center mt-20 mb-8">Value We Give to You</p>
      </div>

      {/* Content Section */}
      <div className="flex justify-center font-serif m-10 gap-10">
        <div className="relative w-3/5">
          <img
            ref={imageRef}
            src={"/pic2.png"}
            alt="Our Value"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ pointerEvents: "none" }} // Prevent interaction with the image
          />
        </div>

        <div className="flex flex-col w-2/5" style={{ height: fixedHeight }}>

          {/* Dropdown 1 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown1}
              className= "rounded cursor-pointer text-white text-xl bg-black p-6 mt-5 mb-5 shadow-md hover:scale-105 transition-transform duration-300"
            >
              Best interest rates on the market
            </h2>
            {isOpen1 && (
              <div className="bg-gray-100 p-4 rounded-full mt-8 mb-4 shadow-lg">
                <p>
                  Our interest rates are carefully tailored to give you the best value on the market, 
                  offering competitive returns with full transparency and no hidden fees. 
                  Whether you're looking to save or invest, we've got the perfect plan for you.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10">Best interest rates on the market</h2>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown2}
              className="rounded cursor-pointer text-white text-xl bg-black p-6 mb-5 shadow-md hover:scale-105 transition-transform duration-300"
            >
              Easy and flexible payments
            </h2>
            {isOpen2 && (
              <div className="bg-gray-100 p-4 rounded-full mt-2 mb-4 shadow-lg">
                <p>
                  We offer a variety of payment options designed to fit your lifestyle, allowing you to manage your payments easily and flexibly. 
                  Whether you prefer monthly, bi-weekly, or custom schedules, our plans adapt to your needs without any hassle.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10">Easy and flexible payments</h2>
            )}
          </div>

          {/* Dropdown 3 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown3}
              className="rounded cursor-pointer text-white text-xl bg-black p-6 mb-5 shadow-md hover:scale-105 transition-transform duration-300"
            >
              Premium customer support
            </h2>
            {isOpen3 && (
              <div className="bg-gray-100 p-4 rounded-full mt-2 mb-4 shadow-lg ">
                <p>
                  Our premium customer support ensures that you receive personalized assistance whenever you need it. 
                  With dedicated experts, we're here to resolve your issues quickly and efficiently.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10">Premium customer support</h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
