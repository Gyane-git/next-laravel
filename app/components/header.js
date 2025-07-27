"use client";
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to My Website
        </h1>
        
        <div className="relative">
          <div 
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors"
            onClick={toggleDropdown}
          >
            GS
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                View Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Help & Support
              </a>
              <hr className="my-1" />
              <a href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}