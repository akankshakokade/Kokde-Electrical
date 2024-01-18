// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://github.com/akankshakokade/Kokde-Electrical/blob/main/kokde-electrical/src/Images/Kokde%20Ele_img.png?raw=true" alt="" className="h-8 md:h-10 mr-2" />
          <span className="font-bold text-xl md:text-2xl"></span>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>

          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#inquiry" className="hover:text-gray-300">Inquiry</a>

        </div>

        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
