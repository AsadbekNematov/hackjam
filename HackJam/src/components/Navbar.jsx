import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-blue-100 shadow-md" : "bg-transparent"
      } z-50`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <div className="p-0 logo w-20 ">
          <img src={logo} className="" alt="Logo" />
        </div>
        <div className="nav-links space-x-4">
          <div>
            <a href="#home" className="hover:text-blue-500 main-color ">
              Home
            </a>
          </div>
          <a href="#about" className="hover:text-blue-500 main-color">
            About
          </a>
          <a href="#schedule" className="hover:text-blue-500 main-color">
            Schedule
          </a>
          <a href="#sponsors" className="hover:text-blue-500 main-color">
            Sponsors
          </a>
          <a href="#socials" className="hover:text-blue-500 main-color">
            Socials
          </a>
          <a href="#faq" className="hover:text-blue-500 main-color">
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
