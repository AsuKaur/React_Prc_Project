import React from "react";
import Item from "./Item";
import "./City.css";
function Package() {
  return (
    <div className="cards">
      <h1>Let us help you chose the best options!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Item
              src="images/family.jpg"
              text="Long Vacations"
              label="Family"
              path="/packages"
            />
            <Item
              src="images/kids.jpg"
              text="Kids & Fun"
              label="Family"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/honeymoon.jpg"
              text="Honeymoon"
              label="Couples"
              path="/packages"
            />
            <Item
              src="images/romantic.jpg"
              text="Romantic Getaway"
              label="Couples"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/meetings.jpg"
              text="Business Meetings"
              label="Work"
              path="/packages"
            />
            <Item
              src="images/conference.jpg"
              text="Conference"
              label="Work"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/seminar.jpg"
              text="Seminar"
              label="Work"
              path="/packages"
            />
            <Item
              src="images/wedding.jpg"
              text="Wedding"
              label="Groups"
              path="/packages"
            />
          </ul>
          <ul className="cards__items">
            <Item
              src="images/bach.jpg"
              text="Bachelorette"
              label="Friends"
              path="/packages"
            />
            <Item
              src="images/celebrate.jpg"
              text="Celebrations"
              label="Groups"
              path="/packages"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Package;
