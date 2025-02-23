import React from "react";
import "../styles/emergency.css";

const Emergency = () => {
  return (
    <div className="emergency-container">
      <h2>Emergency Alert</h2>
      <p>Send emergency notifications to doctors and close contacts.</p>
      <button className="alert-btn">Send Emergency Alert</button>
    </div>
  );
};

export default Emergency;
