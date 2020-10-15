import React from "react";
import Item from "./Item";
import "./Card.css";
function Card() {
  return (
    <div className="cards">
      <h1>Let's see where you can go!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Item
              src="images/img-9.jpg"
              text="Hello"
              label="Adventure"
              path="/services"
            />
            <Item
              src="images/img-2.jpg"
              text="Hello"
              label="Beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/img-9.jpg"
              text="Hello"
              label="Adventure"
              path="/services"
            />
            <Item
              src="images/img-2.jpg"
              text="Hello"
              label="Beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/img-9.jpg"
              text="Hello"
              label="Adventure"
              path="/services"
            />
            <Item
              src="images/img-2.jpg"
              text="Hello"
              label="Beach"
              path="/services"
            />
            <Item
              src="images/img-2.jpg"
              text="Hello"
              label="Beach"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
