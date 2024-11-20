import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Dynamically set the heading based on the route
  const getHeading = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome to the Home Page!";
      case "/about":
        return "Learn More About Us";
      case "/contact":
        return "Get in Touch with Us";
      default:
        return "Page Not Found";
    }
  };

  return (
    <header className="bg-purple-600 text-white p-4 text-center">
      
    </header>
  );
};

export default Header;
