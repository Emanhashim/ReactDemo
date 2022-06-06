import React from 'react';
import './Form1.css';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";


const Email = () => {
    const [email, setEmail] = useState("");
    const history = useHistory();
  
    const login = () => {
        history.push("/Forg")
    }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/bazra.svg' alt='.' />
        </div>
 <div className="form" >
        <h1>Enter Email </h1>
        <span className="form-inputs">
        please enter the email or phone addres you used when you reistered bazra walette and 
        we will snedn your a link ot rest your password
        </span>
    
        <div className="form-inputs">
        
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="username"
            name="username"
            placeholder="Enter your email"
  
            onChange={(e) => setEmail(e.target.value)}
          />

          </div>
          <div className="form-inputs"></div>
        <button className="form-input-btn"  onClick={login}>
         Send
        </button>
        </div>
    
    </div>
    </div>
  );
};

export default  Email;
