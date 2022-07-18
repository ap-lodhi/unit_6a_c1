import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link ,Navigate} from "react-router-dom"
import data from "../db.json"
const Appointment =()=>{
// console.log(data)
    const [data, setData]= useState([])

    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then((res)=> res.json())
        .then((res)=> setData(res.data))
        
        
    },[])
   
    return(
        <>
        <h1>  Appointmnet page  </h1>
            {data.map((data)=>(

                <p key={data.id}>{data.id}  -<Link to={`/appointment/${data.id}`} > {data.first_name}</Link> </p>
            ))}
        </>
    )
}
export default Appointment;