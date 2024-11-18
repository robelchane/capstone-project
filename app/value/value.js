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
        <p className="text-4xl font-serif text-[#001f3f] text-center mt-20 mb-10">Value We Give to You</p>
      </div>

      {/* Content Section */}
      <div className="flex justify-center font-serif m-10 gap-10">
        <div className="relative w-1/2">
          <img
            ref={imageRef}
            src={"/pic2.png"}
            alt="Our Value"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />
        </div>

        <div className="flex flex-col w-1/2" style={{ height: fixedHeight }}>

          {/* Dropdown 1 */}
          <div
            className="mb-5 bg-transparent border-b border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:border hover:border-[#001f3f] hover:text-white transition-colors duration-700 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredDropdown === 1 ? (
              <div>
                <p className="text-xl p-8">
                  Our interest rates offer competitive returns with full transparency and no hidden fees, 
                  ensuring the best value for your savings or investments.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10 italic">Best interest rates on the market</h2>
            )}
          </div>

          {/* Dropdown 2 */}
          <div
            className="mb-5 bg-transparent border-b border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:border hover:border-[#001f3f] hover:text-white transition-colors duration-700 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredDropdown === 2 ? (
              <div>
                <p className="text-xl p-8">
                  We provide flexible payment options to suit your lifestyle, including monthly, bi-weekly, or 
                  custom schedules, ensuring hassle-free management.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10 italic">Easy and flexible payments</h2>
            )}
          </div>

          {/* Dropdown 3 */}
          <div
            className="mb-5 bg-transparent border-b border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:border hover:border-[#001f3f] hover:text-white transition-colors duration-700 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredDropdown === 3 ? (
              <div>
                <p className="text-xl p-8">
                  Our premium support provides personalized assistance, resolving your issues quickly 
                  and efficiently with dedicated experts.
                </p>
              </div>
            ) : (
              <h2 className="text-2xl py-10 italic">Premium customer support</h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
 