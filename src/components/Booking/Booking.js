import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"
import "./Booking.css"
import Time from './Time';

function Booking() {

  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("SessionVariable") === null) setLoggedIn(false);
  }, []);

    const[date,setdate]=useState(new Date());
    const[showTime,setShowTime]=useState(false);

  return (
    <>
      {loggedIn ? (<div className='app'>
        <h1 className='header'>Booking Calendar</h1>
        <div className='calendar-container'>
        <Calendar onChange={setdate} value={date} onClickDay={()=>setShowTime(true)}/>
        </div>
    <p>
      <span>Default selected date:</span>{' '} {date.toDateString()}
    </p>
          <Time showTime={showTime} date={date}/>
      </div>): (
        window.location.href = '/'
      )}
    </>
  )
}

export default Booking