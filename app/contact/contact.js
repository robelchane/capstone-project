"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="font-serif overflow-y-auto text-black" id="contact">
      {/* Flex Container for Contact and Image Sections */}
      <div className="flex justify-center items-center mt-20 mb-20">
        
        {/* Content Section */}
        <div className="flex flex-col w-1/2 m-10">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold">Easy to contact us</span>
          </div>
          <div className="my-10 text-lg">
            <p>We're always ready to help by providing the best services for you.</p>
            <p>We believe a good place to live can make your life better.</p>
          </div>

          <div className="items-center text-xl">
            <p className="m-4 hover:text-gray-500 hover:underline">
              <a href="tel:000-000-0000" className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-5" />
                <span className="ml-2">Tel: 000-000-0000</span>
              </a>
            </p>
            <p className="m-4 hover:text-gray-500 hover:underline">
              <a href="mailto:robel@gmail.com" className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                <span className="ml-2">Email: propertypros@gmail.com</span>
              </a>
            </p>
            <p className="m-4 hover:text-gray-500 hover:underline">
              <a className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="w-5" />
                1234 12 Ave SW, Calgary, AB
              </a>
            </p>

            {/* Content Form Button */}
            <Link href="/contactform">
              <button
                type="button"
                className=" mt-10 text-xl text-shadow center-align bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-900"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 m-10">
          <img src="/contact.jpg" alt="Contact Us" className="w-full h-auto"/>
        </div>
      </div>
    </main>
  );
}

