import React, { useState } from 'react'
import Calendar from "react-calendar"
import "./Booking.css"
import Time from './Time';

function Booking() {

    const[date,setdate]=useState(new Date());
    const[showTime,setShowTime]=useState(false);


  return (
    <div className='app'>
      <h1 className='header'>Booking Calendar</h1>
      <div className='calendar-container'>
      <Calendar onChange={setdate} value={date} onClickDay={()=>setShowTime(true)}/>
      </div>
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        <Time showTime={showTime} date={date}/>
    </div>
  )
}

export default Booking