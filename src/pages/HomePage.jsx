import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div></div>
      <Container>
        <div className="text-4xl font-bold flex justify-center mt-10 text-[#6B006A]">
          Welcome to Hirkamal Creations
        </div>
        <div className="text-md flex justify-center text-gray-500 mt-2">
          Crafting Visual Stories. Building Digital Dreams.
        </div>
        <div className="mt-5 p-4">
          At Hirkamal Creations, our core expertise lies in creative graphic
          designing and professional website development. We bring brands to
          life through compelling visuals and pixel-perfect digital experiences.
          Alongside our core services, we also offer strategic digital
          marketing, YouTube channel management, and event-focused live graphics
          — making us your all-in-one creative partner.
        </div>
      </Container>
    </>
  );
};

export default HomePage;
