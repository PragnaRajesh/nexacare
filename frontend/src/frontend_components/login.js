import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation function
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup

  const handleSubmit = () => {
    navigate("/dashboard"); // Navigate to Dashboard after login/signup
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignup ? "Create Account" : "Welcome to NexaCare"}</h2>
        <form>
          {isSignup && <input type="text" placeholder="Full Name" className="input-field" />}
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-btn" type="button" onClick={handleSubmit}>
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <a href="#" className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign up"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
