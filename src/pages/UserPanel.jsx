import React from "react";
import { Link } from "react-router-dom";
import "./UserSection.css"; // Create this CSS file for styling

const UserSection = ({ isOpen, onClose }) => {
  return (
    <div className={`user-section ${isOpen ? "open" : ""}`}>
      <div className="user-section-content">
        <div className="user-profile">
          {/* Add user profile information here */}
          <Link to="/profile">My Profile</Link>
          {/* Add more user-related content */}
        </div>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default UserSection;
