import React, { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ hidden, aliensRef, aboutRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    setMenuOpen(false);

    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToHome = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`navbar ${hidden ? "navbar-hide" : ""}`}>
      <div className="logo">
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li onClick={scrollToHome}>Home</li>

        <li onClick={() => scrollToSection(aliensRef)}>
          Aliens
        </li>

        <li>Episodes</li>

        <li>Games</li>

        <li onClick={() => scrollToSection(aboutRef)}>
          About
        </li>
      </ul>

      <div className="nav-buttons">
        <a
          href="https://github.com/deepanshu1420"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub />
        </a>

        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={scrollToHome}>Home</li>

          <li onClick={() => scrollToSection(aliensRef)}>
            Aliens
          </li>

          <li onClick={() => setMenuOpen(false)}>
            Episodes
          </li>

          <li onClick={() => setMenuOpen(false)}>
            Games
          </li>

          <li onClick={() => scrollToSection(aboutRef)}>
            About
          </li>

          <a
            href="https://github.com/deepanshu1420"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link mobile-github"
          >
            <FaGithub />
          </a>

          <button className="btn btn-outline">Login</button>
          <button className="btn btn-fill">Sign Up</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;