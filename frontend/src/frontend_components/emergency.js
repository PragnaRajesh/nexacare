import React from "react";
import Navbar from "./navbar";
import "../styles/emergency.css";

const Emergency = () => {
  return (
    <>
      <Navbar />
      <div className="emergency-container">
        <h2>Emergency Alert</h2>
        <p>Send emergency notifications to doctors and close contacts.</p>
        <button className="alert-btn">Send Emergency Alert</button>
      </div>
    </>
  );
};

export default Emergency;
