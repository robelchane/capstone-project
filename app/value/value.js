"use client";
import { useState } from "react";
 
export default function Value() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
 
  function toggleDropdown1() {
    setIsOpen1(!isOpen1);
  }
 
  function toggleDropdown2() {
    setIsOpen2(!isOpen2);
  }
 
  function toggleDropdown3() {
    setIsOpen3(!isOpen3);
  }
 
  return (
    <main className="font-serif overflow-y-auto text-black" id="value">
      {/* Content Section */}
      <div className="flex justify-center font-serif mt-20">
        <div className="w-1/2 m-10">
          <img src={"/value.png"} alt="Profile picture" />
        </div>
 
        <div className="flex flex-col w-1/2 m-10">
          <div className="flex flex-col items-start">
            <span className="text-yellow-700 text-2xl font-bold">Our Values</span>
            <span className="text-3xl font-bold">Value We Give to You</span>
          </div>
          <div className="my-10 text-lg">
            <p>
              Find a variety of properties that suit you very easily. Forget all
              difficulties <br/>in finding a residence for you.
            </p>
          </div>
 
          {/* Dropdown 1 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown1}
              className= "cursor-pointer text-white font-semibold bg-gray-900 p-6 mt-5 mb-5 shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              Best interest rates on the market
            </h2>
            {isOpen1 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-2 mb-4 shadow-lg">
                <p>
                  Our interest rates are carefully tailored to give you the best value on the market,
                  offering competitive returns with full transparency and no hidden fees.
                  Whether you're looking to save or invest, we've got the perfect plan for you.
                </p>
              </div>
            )}
          </div>
 
          {/* Dropdown 2 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown2}
              className="cursor-pointer text-white font-semibold bg-gray-900 p-6 mb-5 shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              Easy and flexible payments
            </h2>
            {isOpen2 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-2 mb-4 shadow-lg">
                <p>
                  We offer a variety of payment options designed to fit your lifestyle, allowing you to manage your payments easily and flexibly.
                  Whether you prefer monthly, bi-weekly, or custom schedules, our plans adapt to your needs without any hassle.
                </p>
              </div>
            )}
          </div>
 
          {/* Dropdown 3 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown3}
              className="cursor-pointer text-white font-semibold bg-gray-900 p-6 mb-5 shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              Premium customer support
            </h2>
            {isOpen3 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-2 mb-4 shadow-lg">
                <p>
                  Our premium customer support ensures that you receive personalized assistance whenever you need it.
                  With dedicated experts, we're here to resolve your issues quickly and efficiently.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
 