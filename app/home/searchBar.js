import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-200 max-w-md">
      {/* Location Icon with size */}
      <FontAwesomeIcon icon={faLocationDot} className="w-10 m-3" />
      
      {/* Input Field */}
      <input
        className="w-full px-3 py-2 border rounded-lg placeholder-gray-500"
        placeholder="Search"
      />
      
      {/* Search Button */}
      <button
        type="button"
        className="ml-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}