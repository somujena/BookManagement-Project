import React from 'react'; 
import { useState } from "react";
import Axios from 'axios';

import "./login.css";

function Register(props){
    const [FirstName, setFName] = useState("");
    const [LastName, setLName] = useState(0);
    const [EMAIL, setEMAIL] = useState("");
    const [Password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");

    const CHECK = () => {
        if(Password !== CPassword){
            alert("Passwords did not matched!");
            document.getElementById("frm").action="#";
            return false;
            
        }
        if(!EMAIL.includes("@iiit-bh.ac.in")){   
            alert("Email Address must include @iiit-bh.ac.in");
            document.getElementById("frm").action="#";
            return false;
        } 
        else{
            console.log("in");
            Axios.post('http://localhost:3001/create', {
                FName: FirstName,
                LName: LastName,
                EMAIL: EMAIL,
                Password: Password,
            }).then (() => {               
            })
            alert("Thanks for joining with us! Your account has been successfully created.");
            props.history.push('/BookList');
        }
        
    }
        
  
    return (
      <div className="Register">
        <h1 className="head">IIIT'S_BOOKSHOP</h1>
        <div className="container" id="container">
            <div className="form-container sign-in-container">
            <form  id="frm">
                <input
                    type="text" placeholder="First Name" required
                    onChange={(event) => {setFName(event.target.value);}}
                />
                <input 
                    type="text" placeholder="Last  Name"
                    onChange={(event) => {setLName(event.target.value);}}
                />
                <input 
                    type="email" placeholder="Email" required
                    onChange={(event) => {setEMAIL(event.target.value);}}
                />
                <input
                    type="password" placeholder="Password" maxLength={20} required
                    onChange={(event) => {setPassword(event.target.value);}}
                />
                <input 
                    type="password" placeholder="Confirm Password" required
                    onChange={(event) => {setCPassword(event.target.value);}}
                />
                <button onClick={CHECK}>Sign Up</button>
            </form></div>
            <div className="overlay-panel2 overlay-right">
            </div>
        </div>
    </div>
     );
    }
    
    export default Register;