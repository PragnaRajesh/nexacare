import React from "react";
import Navbar from "./navbar";
import "../styles/healthtracking.css";

const HealthTracking = () => {
  return (
    <>
      <Navbar />
      <div className="healthtracking-container">
        <h2>Health Tracking</h2>
        <p>Track your health stats like diet, exercise, sleep, and water intake.</p>
      </div>
    </>
  );
};

export default HealthTracking;
