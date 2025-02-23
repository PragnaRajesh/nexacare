import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import frontend components
import Login from "../frontend_components/login";
import Dashboard from "../frontend_components/dashboard";
import HealthTracking from "../frontend_components/healthtracking";
import Appointments from "../frontend_components/appointments";
import Emergency from "../frontend_components/emergency";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/health-tracking" element={<HealthTracking />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
