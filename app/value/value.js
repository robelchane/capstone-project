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
            <span className="text-orange-500 text-2xl font-bold">Our Values</span>
            <span className="text-3xl font-bold">Value We Give to You</span>
          </div>
          <div className="my-10 text-lg">
            <p>
              Find a variety of properties that suit you very easily. Forget all
              difficulties in finding a residence for you.
            </p>
          </div>

          {/* Dropdown 1 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown1}
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md"
            >
              Best interest rates on the market
            </h2>
            {isOpen1 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-4 shadow-lg">
                <p className="mb-2">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="my-10 text-center">
            <h2
              onClick={toggleDropdown2}
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md"
            >
              Easy and flexible payments
            </h2>
            {isOpen2 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-4 shadow-lg">
                <p className="mb-2">
                  Dolore irure commodo et laborum sunt minim anim est. In labore
                  mollit minim ipsum. Exercitation in fugiat est ut ad ea
                  cupidatat ut in cupidatat occaecat ut occaecat consequat.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 3 */}
          <div className="text-center">
            <h2
              onClick={toggleDropdown3}
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-4 rounded-lg shadow-md"
            >
              Premium customer support
            </h2>
            {isOpen3 && (
              <div className="bg-gray-100 p-4 rounded-lg mt-4 shadow-lg">
                <p className="mb-2">
                  Fugiat amet aliquip irure deserunt magna ullamco sunt non
                  dolor esse incididunt duis. Enim aliqua veniam in proident
                  amet sint.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}