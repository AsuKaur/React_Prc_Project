import React from "react";
import "../../App.css";
import "../Hero.css";
import Hero from "../Hero";
import Sub from "../Sub";

function Home() {
  return (
    <>
      <Hero />
      <Sub />
      <div className="hero-container"></div>
    </>
  );
}

export default Home;
