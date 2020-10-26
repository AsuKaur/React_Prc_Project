import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";
import "../City.css";

export default function Contact() {
  return (
    <>
      <h1 className="contact">CONTACT</h1>
      <div className="card">
        <div className="cards__container">
          <div className="card-home">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
