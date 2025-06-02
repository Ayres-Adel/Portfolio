import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBarStyle.css";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();


  const navLinks = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Projects", to: "#projects" },
    { label: "Languages", to: "#languages" },
    { label: "Education", to: "#education" }, 
    { label: "Contact", to: "#contact" },
  ];


  const handleNavClick = (e, to) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(to.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <h1>
              <span>A</span>yres
            </h1>
          </Link>
        </div>

        <div
          className={`hamburger${isMenuOpen ? " active" : ""}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          tabIndex={0}
          role="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen((open) => !open)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`nav-links${isMenuOpen ? " active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`HSA${location.hash === link.to ? " active" : ""}`}
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="HSA resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
