import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Only main logo acts as Home button */}
      <Link to="/" className="navbar-logo">
        <img
          src="/Rishi Cropped.png"
          alt="Rishi Shah Logo"
          className="logo-img"
        />
      </Link>

      {/* Right side: Navigation links */}
      <div className="navbar-links">
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/socials" className="nav-link">Socials</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
