import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Hero.css";
import "../App.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Let's Explore!</p>
      <div className="hero-btns">
        <Link to="/packages">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            destination="packages"
          >
            Sure
          </Button>
        </Link>
        <Link to="/places">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            destination="places"
          >
            Let's See <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
