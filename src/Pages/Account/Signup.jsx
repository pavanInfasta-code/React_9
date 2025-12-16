import React from "react";
import "./Signup.css"; // Import CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">

        <h2>Create Account</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter password" required />
        </div>

        <button className="signup-btn">Create Account</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>

      </form>
    </div>
  );
};

export default Signup;
