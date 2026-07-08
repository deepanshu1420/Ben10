import React, { useEffect, useState } from "react";
import "./BackToTop.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;