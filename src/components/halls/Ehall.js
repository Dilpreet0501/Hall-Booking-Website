import React from 'react'
import ehallimage from "../../assets/ehallimg.png"
import { Link } from "react-router-dom"
import "./ehall.css"

function Ehall() {
  return (
    <div>
        <div className='main'>
            <div className='heading'>
                <p className='ehall'>E-Hall</p>
            </div>
            <div className='image'>
                <img className='img' src={ehallimage} alt='E-hallImage'/>
            </div>
            <button className="click" ><Link to="/form"><span className="linkcol">Book Now</span></Link></button>
        </div>
    </div>
  )
}

export default Ehall