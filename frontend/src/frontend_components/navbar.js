import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">NexaCare</h3>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/health-tracking">Health Tracking</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/emergency">Emergency</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
