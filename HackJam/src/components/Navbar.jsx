import { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 w-full transition-all  duration-300 ${
        scrolled ? "nv-bg" : "bg-transparent"
      } z-50`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-around items-center select-none">
        <div className="p-0 logo w-20 ">
          <img src={logo} className="" alt="Logo" />
        </div>
        <div className="nav-links space-x-4">
          <a href="#home" className="sec_color main-color text-xl">
            Home
          </a>
          <a href="#about" className="sec_color main-color text-xl">
            About
          </a>
          <a href="#itinerary" className="sec_color main-color text-xl">
            Itinerary
          </a>
          <a href="#collaborators" className="sec_color main-color text-xl">
            Collaborators
          </a>
          <a href="#faq" className="sec_color main-color text-xl">
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
