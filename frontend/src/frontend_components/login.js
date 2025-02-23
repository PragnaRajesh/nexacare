import React from "react";
import "../styles/login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to NexaCare</h2>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-btn" type="button" onClick={() => navigate("/dashboard")}>Login</button>

        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
