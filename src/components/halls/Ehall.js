import React from 'react'
import ehallimage from "../../assets/ehallimg.png"
import { Link } from "react-router-dom"
import "./ehall.css"

function Card(props){
  return(
    <div className='card'>
      <div className='card_body'>
      <h2 className='card_title'>{props.title}</h2>
        <img src={props.img}/>
      </div>
        <button className='card_button'><Link to="/form">Book Now!</Link></button>
    </div>
  )
}
function Ehall() {
  return (
    <div className='all'>
       <Card title="E-hall" img={ehallimage}/>
       <Card title="E-hall" img={ehallimage}/>
       <Card title="E-hall" img={ehallimage}/>
       <Card title="E-hall" img={ehallimage}/>
       </div>
  )
}

export default Ehall