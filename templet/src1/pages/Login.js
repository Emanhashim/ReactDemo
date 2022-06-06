import React from 'react';
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import "../components/FontawsomeIcons"
import scrollreveal from "scrollreveal";
import { Form, Button } from 'semantic-ui-react';
import './Form.css';
import swal from 'sweetalert';

import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
     login();
    
    }
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .form-container 
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  

  const history=useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>
{
  if(localStorage.getItem("user-info")){
     
  }
},[])
async function login(){
 
  console.warn(username.password)
  const users={username,password}
 
  let item={username,password};
 const options={
      method:'POST',
      headers:{

          'Content-Type':'application/json',
          "Accept":"application/json",
          "Authorization":`Bearer`
         
      },
      body:JSON.stringify(item)
      
  }
  const url ="http://localhost:8080/api/users/signin"
  try{
   const response= await fetch(url,options);
    const result =await response.json();
   console.log(result);
   localStorage.setItem('user', JSON.stringify(users))
    localStorage.setItem('jwt', users.auth_token)
if(response.ok){
  console.log("login successful")
  swal("Success", "Welcom", "success", {
    buttons: false,
    timer: 2000,
  })
  history.push("/Homex")
}else{
  console.log("failed")
swal("Failed", "Wrong Password or Email Adress", "error")
}
}catch(error) {
  console.error(error);
}

 
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
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Ind</h2>

        <Form.Field>
        <div className="form-inputsx">
         <FontAwesomeIcon icon="user"/> 
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="username"
            name="username"
            placeholder="Enter your email"
            {...register("user", { required: true, maxLength: 30 })}
            onChange={(e) => setUsername(e.target.value)} 
          />
{errors.user && <p className="text-error">UserName Required</p>}
          
        </div>
        </Form.Field>
    
        <Form.Field>
        <div className="form-inputsx">
        <FontAwesomeIcon icon="lock"/> 
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register("pass", { required: true, maxLength: 30 })}
            onChange={(e) => setPassword(e.target.value)}
          /> 
          <span className="form-input-login1">
            <a href="/email">Forgot password?</a>
          </span>
          {errors.pass && <p className="text-error">Password Required</p>}
        </div>
        </Form.Field>

        <div className="form-inputs"></div>
        <button className="form-input-btnx" type='sumbit' >
          Login
        </button>
        </form>
        <span className="form-input-login">
          Dont't Hava an account? Register <a href="sign-up">here</a>
        </span>
      </div>
      
     
    </div>
    
    </div>
    
  );
};

export default Login;
