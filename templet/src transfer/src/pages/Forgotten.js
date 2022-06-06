import React from 'react';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import './Form.css';

const Forgotten = () => {
const login1 = () => {
        history.push("/dashboard")
    }
  const history=useHistory();
    const [password2, setPassword2] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>
{
  if(localStorage.getItem("user-info")){
      history.pushState("/dashboard")
  }
},[])
async function login(){
  console.warn(password2.password)
  const users={password2,password}
  
  let item={password2,password};
  let result= await fetch("",{
      method:'POST',
      headers:{

          'Content-Type':'application/json',
          "Accept":"application/json"
         
      },
      body:JSON.stringify(item)
      
  })
  
  result =await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/dashboard")
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
        <h2>Change Password</h2>

    
        <div className="form-inputs">
        
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter New password"
  
            onChange={(e) => setPassword(e.target.value)}
          />

          
        </div>
        <div className="form-inputs">
       
          <label className="form-label"> Rept Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Rept password"
          
            onChange={(e) => setPassword2(e.target.value)}
          />
          <span className="form-input-login1">
           
          </span>
        </div>
       

        <div className="form-inputs"></div>
        <button className="form-input-btn"  onClick={login1}>
        Change password
        </button>
        <span className="form-input-login">
          Dont't Hava an account? Register <a href="/sign-up">here</a>
        </span>
      </div>
      

    </div>
    </div>
  );
};

export default Forgotten;
