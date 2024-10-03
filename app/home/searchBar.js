import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-200 max-w-md mx-auto">
      {/* Location Icon with size */}
      <FontAwesomeIcon icon={faLocationDot} className="w-6 m-3 text-black" />
      
      {/* Input Field */}
      <input
        aria-label="Search location"
        className="w-full px-3 py-2 border rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Search"
      />
      
      {/* Search Button */}
      <button
        type="button"
        className="ml-2 bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Search
      </button>
    </div>
  );
}
