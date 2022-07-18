import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = () => {
    
      const payload = { email, password };
      if(email === "" || password=== ""){
        return alert("please fill the details ")
      }
      fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            // alert("login succ")
           const tq= res.token;
           <Home tq={tq}/>
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div>
        <h1>LOGIN</h1>
        <label>
          EMAIL
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          PASSWORD
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button  className="btn" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}
export default Login;   



//eve.holt@reqres.in
    //cityslicka