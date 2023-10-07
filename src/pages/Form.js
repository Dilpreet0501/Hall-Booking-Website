import React from 'react'
import "./Form.css"
import {Link} from "react-router-dom"

function Form(props) {
   
 
 

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
        <button type="submit"><Link to="/booking" >Click to open booking calendar</Link></button>
        
        <label className="disp_date"> Date</label>
        <input type="text" name="datedisp" className="date_final" value={JSON.parse(localStorage.getItem('date'))} />
      <br></br>
        <label className="disp_time">Time</label>
        <input type="text" className="time_final" value={JSON.parse(localStorage.getItem('time'))} />
       <br></br>
        <label className='heading'>Email</label>
        <input type='email' name="user_email" className='entry'/>

        <button className="submit" >Request Booking</button>
        
      </form>
      </div>
  )
}

export default Form

