import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Calendar from "react-calendar"
import Time from "../Booking/Time";

function Form(props) {

  const [date, setDate]=useState(new Date());

  const [showTime, setShowTime]=useState(false);
  
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("SessionVariable") === null) setLoggedIn(false);
  }, []);

  return (
    <>
    {loggedIn ? (<div className="form_class">
      <form className="f1">
        <label className="heading">Name</label>
        <input type="text" name="name" className="entry" />

        <label className="heading">Club/Committee Name</label>
        <input type="text" name="club_email" className="entry" />

        <label className="heading">Event Name</label>
        <input type="text" className="entry" />

        <label className="heading">Select available date and time slots</label>
        <button type="submit">
          <Link to="/booking">
            <div className="linkcol">Click to open booking calendar</div>
          </Link>
        </button>

        <div className="disp_date"> Date</div>
        {/* <input
          type="text"
          name="datedisp"
          className="date_final"
          value={JSON.parse(localStorage.getItem("date"))}
        /> */}
        <Calendar onChange={setDate} value={date} onClickDay={()=>setShowTime(true)}/>

        {showTime && 
        <div className="calendar-header" style={{fontSize:'16px'}}>
          <p>
            <span>Selected date:</span>{' '} {date.toDateString()}
          </p>
          <Time showTime={showTime} date={date}/>
        </div>
        }

        <br></br>
        <div className="disp_time">Time</div>
        <input
          type="text"
          className="time_final"
          value={JSON.parse(localStorage.getItem("time"))}
        />
        <br></br>
        <div className="heading" style={{ textAlign: "left" }}>
          Email
        </div>
        <input type="email" name="user_email" className="entry" />

        <button className="submit">Request Booking</button>
      </form>
    </div>): (
        window.location.href = '/'
      )}
    </>
  );
}

export default Form;
