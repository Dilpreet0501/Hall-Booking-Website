import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Calendar from "react-calendar"
import Time from "../Booking/Time";
import 'react-calendar/dist/Calendar.css';

function prevent(e){
  e.preventDefault();
}

function Form(props) {

  const [date, setDate]=useState(new Date());

  const [showTime, setShowTime]=useState(false);
  
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("SessionVariable") === null) setLoggedIn(false);
  }, []);

  return (
    <>
    {loggedIn ? (
      // <div className="form"></div>

      <div className="form">
        {/* <div className="form_class"> */}
      <div className="calendar-header form-title">Fill in the form to book an event</div>
      <form className="f1" onSubmit={prevent}>
        <label className="heading">Name</label>
        <input type="text" name="name" className="entry" />

        <label className="heading">Club/Committee Name</label>
        <input type="text" name="club_email" className="entry" />

        <label className="heading">Event Name</label>
        <input type="text" className="entry" />

        <button type="submit">
          <Link to="/booking">
            <div className="linkcol">Click to open event calendar</div>
          </Link>
        </button>

        {/* <div className="heading"> Date</div> */}
        <div className="heading" style={{margin:'12px 0'}}>Select available date and time slots</div>
        
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Calendar onChange={setDate} value={date} onClickDay={()=>setShowTime(true)}/>
        </div>

        {showTime && 
        <div className="calendar-header">
          <p>
            <span>Selected date:</span>{' '} {date.toDateString()}
          </p>
          <Time showTime={showTime} date={date}/>
        </div>
        }

        {/* <br></br> */}
        <div className="heading">Time</div>
        <input
          type="text"
          className="entry"
          value={JSON.parse(localStorage.getItem("time"))}
        />
        <br></br>
        <div className="heading" style={{ textAlign: "left" }}>
          Email
        </div>
        <input type="email" name="user_email" className="entry" />

        <button type="submit" style={{padding:'10px 0', backgroundColor:'green'}}>Request Booking</button>
      </form>
    {/* </div> */}
      </div>

    ): (
        window.location.href = '/'
      )}
    </>
  );
}

export default Form;
