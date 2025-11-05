import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Rishi shah's blog site
      </p>
      <p className="footer-subtext">
        Researchs, Strategies, and stories — all in one place.
      </p>
    </footer>
  );
};

export default Footer;
