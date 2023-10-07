import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, {useState } from 'react'

import {FaBars, FaTimes} from "react-icons/fa";
// import Hall from "../pages/hall/Hall";

const Navbar = () => {

    const[click,setClick]=useState(false);
    const handleClick = () => setClick(!click);

    const[color,setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);


  return (
    <div className={color?"header-bg":"header-bg"}>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Create Booking</Link>
            </li>
            <li>
                <Link to="{AllBookings}">All Current Bookings</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color:"#fff"}}/>
            ):(
                <FaBars size={20} style={{color:"#fff"}}/>
            )}
        </div>
    </div>
  )
}

export default Navbar