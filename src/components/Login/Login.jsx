import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
const authorised_mail = [
  "aditya.prasad2002@gmail.com",
  "adityax.121003@gmail.com",
];

function Login() {
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    var decoded = jwt_decode(response.credential);
    setUser(decoded);
    if (decoded.email_verified) {
      for (var i = 0; i < authorised_mail.length; i++) {
        if (decoded.email === authorised_mail[i]) {
          setVerified(true);
          localStorage.setItem('SessionVariable', 1);
          window.location.href = '/home'
          break;
        }
      }
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "770665074123-4kj7kvh4bh7f3aol6hs1g0ini22ps0ah.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
    });
  }, []);

  return (
    <div className="background-container">
      <div className="overlay-container">
        <div className="center-container">
          <h1 className="title">Hall Booking System</h1>
          <div className="form-container">
            <h1>Sign-in</h1>
            <div id="signinDiv"></div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
