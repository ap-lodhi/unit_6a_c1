import React from "react";
import { useNavigate } from "react-router-dom";
const Home =()=>{
    const navigate =useNavigate();
    const handle =({tq})=>{
        if(tq=== "" ){
            navigate("/login")
        }
       navigate("/appointment")
    }
    return(
        <>
        <h1>view  more appointment </h1>
    <button onClick={handle}>click here</button>       
        </>
    )
}
export default Home;