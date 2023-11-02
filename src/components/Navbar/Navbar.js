import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, {useState } from 'react'

import {FaBars, FaTimes} from "react-icons/fa";

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
    function change(){
        window.location.href='/';
        localStorage.clear();
    }

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header-bg":"header-bg"}>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="{AllBookings}">All Events</Link>
            </li>
            <li onClick={change}>
            Logout
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