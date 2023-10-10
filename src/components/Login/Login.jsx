import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication
  };
  return (
    <div className="background-container">
      <div className="overlay-container">
        <div className="center-container">
          <h1 className="title">E-HALL Booking System</h1>
          <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <span className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <div>
              <span className="link">
                Don't have an account?{" "}
                <Link to="/register">
                  <span className="lr">Register</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
