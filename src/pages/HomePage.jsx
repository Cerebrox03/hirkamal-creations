import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 2000, 0.8);

  return (
    <>
      <NavBar />

      <div
        className="portfolio"
        style={{
          position: "fixed",
          top: "100px",
          left: 0,
          width: "100vw",
          height: "calc(100vh - 100px)",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <img
          src="/assets/Portfolio.jpg"
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: opacity,
            transition: "opacity 0.3s ease-out",
          }}
        />
      </div>
      <About />
    </>
  );
};

export default HomePage;
