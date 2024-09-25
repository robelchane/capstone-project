"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faTimes } from '@fortawesome/free-solid-svg-icons';

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
      {/* Content Section */}
      <div className="flex justify-center items-start gap-10 font-serif mt-20 m-10">
        {/* Left Contact Info */}
        <div className="flex flex-col w-1/2 text-left">
          <div className="text-left mb-10">
            <p className="text-2xl font-bold" style={{ color: '#001f3f' }}>Our Contact Us</p>
            <p className="text-black text-4xl font-bold my-2">Easy to contact us</p>
          </div>
          <div className="text-lg mb-10">
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
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="w-1/2 border border-gray-400 bg-gray-200 p-5 rounded-lg transition-all hover:p-6 hover:m-1">
          <p className="text-xl font-bold mb-5 text-center">Leave your contact and message, we will contact you.</p>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Name" required className="border border-gray-300 p-3 rounded-lg" />
            <input type="email" placeholder="Email Address" required className="border border-gray-300 p-3 rounded-lg" />
            <input type="tel" placeholder="Phone Number" required className="border border-gray-300 p-3 rounded-lg" />
            <textarea placeholder="Your Message" required className="border border-gray-300 p-3 rounded-lg h-32"></textarea>
            <button type="submit" className="text-white p-3 bg-[#001f3f] rounded-lg transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-105">Send</button>
          </form>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-5 rounded-lg shadow-lg relative">
            <button onClick={closePopup} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTimes} className="w-5" />
            </button>
            <p className="text-lg">Your message has been successfully sent! We will get back to you soon.</p>
          </div>
        </div>
      )}
    </main>
  );
}

