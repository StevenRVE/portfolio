"use client";

import { useState, useEffect } from "react";
import Arrow from "@/components/ui/Arrow";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-black bg-opacity-50 p-2 rounded-full ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <Arrow rotateDegrees={225} />
    </button>
  );
};

export default BackToTop;
