import React from "react";
import Navbar from "./navbar";
import "../styles/appointments.css";

const Appointments = () => {
  return (
    <>
      <Navbar />
      <div className="appointments-container">
        <h2>Appointments</h2>
        <p>Book doctor consultations and manage your upcoming appointments.</p>
      </div>
    </>
  );
};

export default Appointments;
