"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright, faGem } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Footer() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    // Check if name and email are provided
    if (!name || !email) {
      setErrorMessage('Please enter both your name and email.');
      setShowMessage(false); // Hide the success message if validation fails
      return;
    }

    // Clear inputs and show the thank-you message
    setName('');
    setEmail('');
    setShowMessage(true);
    setErrorMessage(''); // Clear any previous error messages

    // Hide the message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };


  return (
    <main className="font-serif text-black bg-[#001f3f]">      
      
      <div className="text-white py-10 px-5 text-center">
      <h2 className="text-4xl mb-3 mt-5">Sign up for updates</h2>
      <p className="mb-8 text-lg">Be the first to hear about news and updates from Property Pros</p>

      <div className="flex justify-center items-end gap-8 mb-6">
        <div className="flex flex-col text-left">
          <label className="text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 w-64 border-b border-white text-white bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex flex-col text-left">
          <label className="text-sm mb-1">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-64 border-b border-white text-white bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={handleSignup}
            className="py-2 px-5 border border-white hover:border-yellow-300 transition-colors duration-300"
          >
            Sign up
          </button>
          {showMessage && (
            <span className="ml-5 text-yellow-200 text-sm">Thanks for signing up!</span>
          )}
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}

      <div className="flex items-center justify-center mb-10 max-w-3xl mx-auto">
        <input type="checkbox" className="cursor-pointer"/>
        <label className="text-sm mt-5">
          Yes! I would like to receive updates about products and services, promotions, special offers, news and events from Property Pros.
        </label>
      </div>
      <hr className="ml-32 mr-32"/>
    </div>
      
      {/* Footer Information */}
      <div className="flex justify-evenly text-lg font-serif p-10 text-white">
        <div>
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                {/* <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-4"/> */}
                <FontAwesomeIcon icon={faGem} className="w-6 h-6 mr-4 mt-1 cursor-pointer"/>
                <p className="font-extrabold text-white text-3xl text-shadow bg-clip-text tracking-widest uppercase">
                  Property Pros
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="m-1 mb-10">
          <div> Contact us
            <hr className="flex border-t-1 border-white mb-5 mt-5" />
          </div>
          <p className="hover:text-white hover:underline my-1">
            <a href="tel:000-000-0000" className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-5 text-white" />
              <span className="ml-2">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-white hover:underline my-1">
            <a href="mailto:robel@gmail.com" className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 text-white" />
              <span className="ml-2">Email: propertypros@gmail.com</span>
            </a>
          </p>
          <p>
            <span className="hover:text-white hover:underline my-1 flex gap-3 my-1">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 text-white" />
              <span>1234 12 Ave SW, Calgary, AB</span>
            </span>
          </p>
        </div>

        <div className="m-1">
          <div>Working Hours
            <hr className="flex border-t-1 border-white mb-5 mt-5" />
          </div>
          <p>Monday - Saturday: 8AM to 5PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="flex justify-between bg-white text-black p-1">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5 text-black" />
          <span className="ml-2">Copyright 2024 Property Pros</span>
        </p>
      </div>
    </main>
  );
}
