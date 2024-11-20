import React from "react";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:ml-20 md:text-left">
            <img src={logo} alt="Logo" className="h-8 mb-4" />
            <p className="text-sm max-w-xs">
              Your goal is our target. Not anything in-between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>

          {/* Our Technologies */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-3">Our Technologies</h4>
            <ul className="space-y-2 text-sm">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left md:mr-10">
            <h4 className="font-semibold text-lg mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t w-[50rem] mx-auto border-white/20 my-6"></div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center text-sm">
            <p className="text-center md:text-left">
                &copy; 2024 AT Digital
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
                <a href="#privacy" className="hover:underline">
                Privacy Policy
                </a>
                <span>|</span>
                <a href="#terms" className="hover:underline">
                Terms & Conditions
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
