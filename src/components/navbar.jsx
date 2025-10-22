import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../assets/images/sads_logo.png";
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ className = "", showNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close hamburger if navbar hides
  useEffect(() => {
    if (!showNav) {
      setIsOpen(false);
    }
  }, [showNav]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${className}`}>
      {/* Logo */}
      <a title="Home" href="" className="nav-link home-link">
        <img width="80px" src={logo} alt="SADS Logo" />
      </a>

      {/* Hamburger (mobile) */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <i class="fa-solid fa-bars"></i>
        <span />
        <span />
        <span />
      </button>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
    About
  </HashLink>
        <a href="/calendar" onClick={() => setIsOpen(false)}>Calendar</a>
        <a href="/resources" onClick={() => setIsOpen(false)}>Resources</a>
      </div>
    </nav>
  );
};

export default Navbar;
