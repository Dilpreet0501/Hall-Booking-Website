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
      {loggedIn ? (<div className='min-calendar'>
        <h1 className='calendar-header'>Booking Calendar</h1>
        <div className='calendar-container'>
        {/* <Calendar onChange={setdate} value={date} onClickDay={()=>setShowTime(true)}/> */}
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ajU2bjJ1NzE3YzN0YjNsOHYxM2o5aTc2NXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19jbGFzc3Jvb20xOWZmZjQ3YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyNTg2NDQ3MTQ2ODE1ODQ2MjQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21kY2U4NDdjNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTEyNDMxNjU5ODgzMjUzNzEyMDIzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb202NGIwMGM0YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE0NTk5MjYwMjMyMTY0MDk0MjM5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxNzA3NTk2MDI4MzYyMTIxODIzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxODc5Mjg3MDAxMDY1MDI2MzE1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAzNTM3NTA2Mzc1NzE1MTcwMjE5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21jNzY4ZWY4ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20zODM2OTdjYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb201ZjUyMGNmN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA1ODg1MTk2Mzc0MTQwMTY4MDEzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExNzMzNDIwNjQzNzU2OTYyNTQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwNjQyOTQ2ODExNjYxOTE5NzkxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb203MzM3YjA1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb203OTlmM2M0M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA0NDA4MjE3MjA2OTg1MDIzMTYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2333B679&color=%23B39DDB&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%23007b83&color=%23174ea6&color=%230047a8&color=%230B8043&color=%23137333&color=%237627bb&color=%23202124&color=%230047a8&color=%230047a8&color=%23b80672&color=%230047a8&color=%230047a8&color=%237627bb" style={{border:'2px solid #777', width:'800px', height:'600px'}}></iframe>
        </div>
      </div>): (
        window.location.href = '/'
      )}
    </>
  )
}

export default Booking