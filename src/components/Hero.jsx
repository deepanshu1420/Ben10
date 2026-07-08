import React, { useEffect, useState } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import AnimatedBackground from "./AnimatedBackground";

const Hero = ({ homeRef, aliensRef, aboutRef }) => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(window.scrollY >= window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aliens = [
    "/images/alien1.png",
    "/images/alien2.png",
    "/images/alien3.png",
    "/images/alien4.png",
    "/images/alien5.png",
    "/images/alien6.png",
  ];

  return (
    <div className="hero" ref={homeRef}>
      <AnimatedBackground />

      <Navbar
        hidden={hideNavbar}
        aliensRef={aliensRef}
        aboutRef={aboutRef}
      />

      <div className="slider-wrapper">
        <div className="slider-track">
          {/* First Set */}
          <div className="alien-slider">
            {aliens.map((src, i) => (
              <div className="alien-card" key={`first-${i}`}>
                <img src={src} alt={`Alien ${i + 1}`} />
              </div>
            ))}
          </div>

          {/* Duplicate Set */}
          <div className="alien-slider">
            {aliens.map((src, i) => (
              <div className="alien-card" key={`second-${i}`}>
                <img src={src} alt={`Alien ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;