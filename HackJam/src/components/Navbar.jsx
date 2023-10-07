import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

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
        scrolled ? "nv-bg" : "bg-transparent"
      } z-50 navbar ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center select-none">
        <div className="p-0 logo w-20 ">
          <a href="#home">
            <img src={logo} className="" alt="Logo" />
          </a>
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="nav-links space-x-4">
          <a href="#home" className="sec_color montserrat main-color text-xl navbar-txt">
            Home
          </a>
          <a href="#about" className="sec_color montserrat main-color text-xl navbar-txt">
            About
          </a>
          <a href="#itinerary" className="sec_color montserrat main-color text-xl navbar-txt">
            Schedule
          </a>
          <a href="#collaborators" className="sec_color montserrat main-color text-xl navbar-txt">
            Collaborators
          </a>
          <a href="#faq" className="sec_color main-color montserrat text-xl navbar-txt">
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
