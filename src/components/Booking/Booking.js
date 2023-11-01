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
      {loggedIn ? (<div className='main-calendar'>
        <h1 className='calendar-header' style={{color:'white'}}>Events Calendar</h1>
        <div className='calendar-container'>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=cmVzb3VyY2VtYW5hZ2VtZW50ZWNlbGxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" className="calendar-iframe" style={{border:'2px solid #777', backgroundColor:'rgb(188, 188, 255)', padding:'8px', borderRadius:'12px'}}></iframe>
        </div>
      </div>): (
        window.location.href = '/'
      )}
    </>
  )
}

export default Booking