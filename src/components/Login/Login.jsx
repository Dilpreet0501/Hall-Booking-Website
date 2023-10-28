import React, {useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import Home from "../../pages/home/Home";
const authorised_mail = [
  "aditya.prasad2002@gmail.com",
  "adityax.121003@gmail.com",
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication
  };
  return !verified ? (
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
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse.credential);
                  var decoded = jwt_decode(credentialResponse.credential);
                  // var f = true;
                  if (decoded.email_verified) {
                    for (var i = 0; i < authorised_mail.length; i++) {
                      if (decoded.email === authorised_mail[i]) {
                        console.log("Aditya Verified");
                        // f = false;
                        setVerified(true);
                        break;
                      }
                    }
                  }
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
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
  ) : (
    <Home />
  );
}

export default Login;
