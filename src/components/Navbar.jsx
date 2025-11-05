import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Logo Text (acts as Home link) */}
      <div className="navbar-logo">
        <Link to="/" className="logo-text">
          RISHI SHAH
        </Link>
      </div>

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
