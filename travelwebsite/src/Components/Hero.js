import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import "../App.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Let's Go!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Come On
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Let's See <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
