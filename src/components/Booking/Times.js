import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const time = ['10:00AM-12:00PM', '2:00PM-4:00PM', '5:00PM-7:00PM'];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);
  const navigate = useNavigate(); 

  function displayInfo(e) {
    console.log(props.date.toDateString());
  console.log(e.target.innerText);
  localStorage.setItem('date',JSON.stringify(props.date.toDateString()));
  localStorage.setItem('time',JSON.stringify(e.target.innerText));
   setInfo(true);
   setEvent(e.target.innerText);
   
   alert("You want to book e-hall on "+ props.date.toDateString()+ " for slot "+ e.target.innerText);
   navigate("/form");
}
  
  return (
    <>
      <div className="times" >
        {time.map((times, index) => {
          return (
            <div key={index}>
              <button onClick={(e) => displayInfo(e)} className='linkcol' type='submit'> {times} </button>
            </div>
          );
        })}
        {/* <div>
      {info ? `You want to book e-hall on ${props.date.toDateString()} for ${event} ` : null}

    </div> */}
      </div>
    </>
  );
}

export default Times;
