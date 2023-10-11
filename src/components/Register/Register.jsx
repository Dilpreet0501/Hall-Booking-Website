import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function Register() {
  const [name, setName] = useState("");
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
          <h1 className="title">
            <span>E-HALL Booking System</span>
          </h1>
          <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <button type="submit">Register</button>
            </form>
            <div>
              <span className="link">
                Already have an account? <Link to="/login"><span className="lr">Log In</span></Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
