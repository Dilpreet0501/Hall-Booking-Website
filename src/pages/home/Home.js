import React from 'react'
import Navbar from '../../components/Navbar.js'
import Ehall from '../halls/Ehall.js'
import "./Home.css"


function Home() {
  return (
    <div>
        <Navbar/>
        <div className='allhalls'>
          <p className='display'>All Halls</p>
          <Ehall/>
        </div>
    </div>
  )
}

export default Home