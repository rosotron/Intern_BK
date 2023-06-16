import React, { useState, useRef } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Please enter a valid email or phone number");
    }
  };

  const handlePasswordBlur = () => {
    if (!password || password.length < 4 || password.length > 60) {
      setPasswordError(
        "Your password must contain between 4 and 60 characters"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Please enter a valid email or phone number");
    }

    if (!password || password.length < 4 || password.length > 60) {
      setPasswordError(
        "Your password must contain between 4 and 60 characters"
      );
    }
  };

  return (
    <div className="signin-container">
      <img className="netflix-logo" src="assets/images/netflixlogo.svg" />
      <div className="signin-box">
        <h2 style={{ color: "#ffffff" }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              className={`email-field details ${emailError ? "err" : ""}`}
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="Email or Phone"
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="form-field">
            <input
              className={`email-field details ${passwordError ? "err" : ""}`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              placeholder="Password"
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <Link to="/browse">
            <button className="signbut" type="submit">
              Sign In
            </button>
          </Link>
          <div className="rem">
            <input type="checkbox" className="remember" /> Remember me
            {"\u00A0".repeat(50)}Need Help
            <br />
            <br />
          </div>
        </form>
        <div className="scon">
          New to Netflix?{" "}
          <Link to="/">
            <span className="snow">
              Sign up now.
              <br />
              <br />
            </span>
          </Link>{" "}
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="lmore">Learn more.</span>
        </div>
      </div>

      <div className="contact">
        Questions? Contact us. <br />
        <br />
        <div className="contact-content">
          <div>
            FAQ <br />
            Cookie Preferences
            <br />
          </div>
          <div>
            Help Center
            <br />
            Corporate Information
          </div>
          <div>Terms of Use</div> Privacy
        </div>
      </div>
    </div>
  );
}
