import React, { useState } from "react";
import logo from "../Images/Logo.png";
import closeIcon from "../Images/close.png"; 

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // state for sidebar visibility

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="bg-primary text-white py-7 px-6 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-5 sm:h-6 pl-16" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base pr-10">
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="#careers" className="hover:text-gray-300">
            Careers
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleSidebar}>
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{
          width: "100vw", // Make sidebar full width
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Close Button with Custom Image */}
        <button
          className="absolute top-4 right-4"
          onClick={closeSidebar}
        >
          <img src={closeIcon} alt="Close" className="h-8 w-8 mr-8 mt-3" /> {/* Custom close button image */}
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 p-6">
          <a href="#services" className="text-gray-800 hover:text-gray-600">
            Services
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            About Us
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </a>
          <a href="#careers" className="text-gray-800 hover:text-gray-600">
            Careers
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
