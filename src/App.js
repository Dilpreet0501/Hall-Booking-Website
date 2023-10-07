import './App.css';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import EHall from './pages/halls/Ehall';
import React from 'react';
import Booking from './components/Booking/Booking';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
     <Route path = "/" element = {<Home/>} />
      <Route path="/hall" element={<EHall/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/booking" element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
