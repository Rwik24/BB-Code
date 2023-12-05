import React from "react";
import "../styles/contact.css";
import tm from "../assets/images/w1.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Welcome to Our Company</h2>
        <p>
          We are a passionate team dedicated to providing the best products and services to our customers. With years of experience in our industry, we take pride in our commitment to quality and customer satisfaction.
        </p>
      </div>
      <div className="about-us-image">
        <img src={tm} alt="Our Team" />
      </div>
    </div>
  );
};

export default AboutUs;
