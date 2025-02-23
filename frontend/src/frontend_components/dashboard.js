import React from "react";
import Navbar from "./navbar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar /> {/* Only one navbar at the top */}
      <div className="dashboard-content">
        <h2>Welcome to NexaCare</h2>
        <p>Your health, appointments, and alerts in one place.</p>
      </div>
    </>
  );
};

export default Dashboard;
