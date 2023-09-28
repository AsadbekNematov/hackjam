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
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <div className="p-0 logo w-20 ">
          <img src={logo} className="" alt="Logo" />
        </div>
        <div className="nav-links space-x-4">
          <a href="#home" className="sec_color main-color ">
            Home
          </a>
          <a href="#about" className="sec_color main-color">
            About
          </a>
          <a href="#schedule" className="sec_color main-color">
            Schedule
          </a>
          <a href="#sponsors" className="sec_color main-color">
            Sponsors
          </a>
          <a href="#socials" className="sec_color main-color">
            Socials
          </a>
          <a href="#faq" className="sec_color main-color">
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
