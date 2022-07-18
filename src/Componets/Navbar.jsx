import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Navbar =()=>{
    return(
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/login">Login</Link>
     
    </div>
    )
}
export default Navbar;