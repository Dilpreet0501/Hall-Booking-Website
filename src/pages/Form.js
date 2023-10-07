import React from 'react'
import "./Form.css"
import {Link} from "react-router-dom"

function form() {
  return (
    <div>
      <form className="f1">
        <label className="heading">Name</label>
        <input type="text" name="name" className="entry"/>

        <label className="heading">Club/Committee Name</label>
        <input type="text" name="club_email" className="entry"/>

        <label className="heading">Event Name</label>
        <input type="text" className="entry"/>

        <label className="heading">Select available date and time slots</label>
        <button type="submit"><Link to="/booking">Click to open booking calendar</Link></button>

        <label className='heading'>Email</label>
        <input type='email' name="user_email" className='entry'/>

        <button className="submit" >Request Booking</button>
        
      </form>
      </div>
  )
}

export default form