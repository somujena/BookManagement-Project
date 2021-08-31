import React from 'react'; 
import { useState } from "react";
import Axios from 'axios'

import { setUserSession } from '../Utils/Common';
import "./login.css";

function Login(props){
  const [Profile, setProfile] = useState("");
  const [EMAIL1, setEMAIL] = useState("");
  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState(0);
  const [CPassword, setCPassword] = useState("");
  const [Password, setPassword] = useState("");

  const hello = () =>  {
    setUserSession(true, EMAIL1);
    props.history.push('/BookList');
  }
  return (
    <div className="Login">
    <h1 className="head">IIIT'S_BOOKSHOP</h1>
    <div className="container">
      <div className="form-container sign-in-container">   
        <form >
          <h1>Sign in</h1>
          <input 
            type="email" placeholder="Email" required
            onChange={(event) => {setEMAIL(event.target.value);}}
          />
          <input
            type="password" placeholder="Password" maxLength={20} required
            onChange={(event) => {setPassword(event.target.value);}}
          />
          <button onClick={hello}>Sign In</button><br />
        </form>
      </div>
      <div className="overlay-panel1 overlay-right"> 
        <h1>Hello Readers!</h1>
        <p>THERE IS NO FRIEND AS LOYAL AS A BOOK</p>
      </div>
    </div>
    
    </div>
  );
}

export default Login;