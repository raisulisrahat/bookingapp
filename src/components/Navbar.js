import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Handle mobile menu toggle

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg bg-transparent fixed w-full top-0 left-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-white">Booking App</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="text-white text-lg hover:text-blue-400">
            Home
          </a>
          <a href="/blog" className="text-white text-lg hover:text-blue-400">
            Blogs
          </a>
          <a href="/about" className="text-white text-lg hover:text-blue-400">
            About Us
          </a>
        </div>

        {/* Theme Toggle + Sign In */}
        <div className="flex items-center">
          <label className="swap swap-rotate mr-4">
            <input type="checkbox" className="theme-controller" value="dracula" />
            {/* Sun Icon */}
            <svg className="swap-off h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon Icon */}
            <svg className="swap-on h-8 w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <a href="/login" className=" px-3 py-2 border-2 rounded-lg text-white hover:glass transition">
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 rounded-lg text-white">
          <a href="/" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
            Home
          </a>
          <a href="/blog" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
            Blogs
          </a>
          <a href="/about" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

