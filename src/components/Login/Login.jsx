import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "../../App.css";
import mail from './authorised_mail.json';

function Login() {

  function handleCallbackResponse(response) {
    var decoded = jwt_decode(response.credential);
    var verified = false;
    if (decoded.email_verified) {
      for (var i = 0; i < mail.authorised_mail.length; i++) {
        if (decoded.email === mail.authorised_mail[i]) {
          verified = true;
          localStorage.setItem("SessionVariable", 1);
          window.location.href = "/home";
          break;
        }
      }
      if (!verified) {
        alert("Login with correct Email");
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
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {});
  }, []);

  return (
    <div className="background-container">
      <div className="overlay-container">
        <div className="center-container">
          <h1 className="title">Hall Booking System</h1>
          <div className="form-container">
            <h1>Sign-in</h1>
            <div id="signinDiv"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
