import React from "react";
import Item from "./Item";
import "./City.css";
function City() {
  return (
    <div className="cards">
      <h1>Let's see where you can go!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Item
              src="images/punjab.jpg"
              text="Punjab"
              label="North"
              path="/packages"
            />
            <Item
              src="images/agra.jpg"
              text="Agra"
              label="North"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/delhi.jpg"
              text="Delhi"
              label="North"
              path="/packages"
            />
            <Item
              src="images/kol.jpg"
              text="Kolkata"
              label="East"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/rajasthan.jpg"
              text="Rajasthan"
              label="West"
              path="/packages"
            />
            <Item
              src="images/karnataka.jpg"
              text="Karnatak"
              label="South"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/kerela.jpg"
              text="Kerela"
              label="South"
              path="/packages"
            />
            <Item
              src="images/mumbai.jpg"
              text="Mumbai"
              label="West"
              path="/packages"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default City;
