import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import Ehall from "../halls/Ehall.js";
import "./Home.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("SessionVariable") === null) setLoggedIn(false);
  }, []);
    return (
    <>
      {loggedIn ? (
        <div className="back">
          <Navbar />
          <div className="allhalls">
            <p className="display">All Halls</p>
            <div className="options">
            <Ehall/>
            </div>
          </div>
        </div>
      ) : (
        window.location.href = '/'
      )}
    </>
  );
}

export default Home;
