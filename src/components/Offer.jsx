import React, { useState, useEffect } from "react";
import "../styles/offer.css";

const OfferPopup = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const popupStyle = {
    display: showPopup ? "block" : "none",
    position: "fixed",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ff5733", // Red color
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    padding: "10px",
    zIndex: 999,
    opacity: showPopup ? 1 : 0, // Fade-in animation
    transition: "opacity 0.5s ease-in",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const circleAnimation = {
    animation: showPopup ? "rotate 2s linear infinite" : "none",
  };

  return (
    <div style={popupStyle}>
      <div style={circleAnimation}>
        <p>Special Offer</p>
      </div>
      <p>Get a discount</p>
      <p>on your next order!</p>
      <button onClick={() => { onClose(); setShowPopup(false); }}>Close</button>
    </div>
  );
};

export default OfferPopup;
