import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Images/Logo.png";
import closeIcon from "../Images/close.png"; 

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // state for sidebar visibility
  const location = useLocation();

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <footer className="bg-purple-700 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <h4 className="font-semibold">Our Technologies</h4>
                <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold">Our Services</h4>
                <ul>
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold">Contact Us</h4>
                <p>info@atdigital.com</p>
            </div>
            </div>
            <p className="text-center mt-4">&copy; 2024 AT Digital</p>
        </div>
    </footer>
  );
};

export default Header;
