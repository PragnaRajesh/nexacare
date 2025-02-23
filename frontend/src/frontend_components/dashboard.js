import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <nav className="sidebar">
          <h3>NexaCare</h3>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/health-tracking">Health Tracking</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/emergency">Emergency Alert</Link></li>
          </ul>
        </nav>
        <div className="dashboard-content">
          <h2>Welcome to NexaCare</h2>
          <p>Your health, appointments, and alerts in one place.</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
