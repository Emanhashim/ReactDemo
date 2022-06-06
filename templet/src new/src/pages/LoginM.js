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


const jwt = localStorage.getItem('jwt')

const LoginM = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    handleSubmitx()
    
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

async function loginUser(credentials) {
  return fetch('http://localhost:8080/api/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer`
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .then((value) => {})
 }
  

    const handleSubmitx = async e => {
     
      const response = await loginUser({
        username,
        password
      });
      console.log(response);
      if ('jwt' in response) {
        swal("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('user', JSON.stringify(result['user']));
          localStorage.getItem('user')
          localStorage.setItem("jwt", JSON.stringify(result['jwt']));
          localStorage.getItem('jwt')
         window.location.href = "/Homex";
 
        });
      } else {
        swal("Failed", response.message, "error");
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
        <h2>Login</h2>

        <Form.Field>
        <div className="form-inputsx">
         <FontAwesomeIcon icon="user"/> 
          <label className="form-label">User ID</label>
          <input
            className="form-input"
            type="username"
            name="username"
            placeholder="Enter your email"
            {...register("user", { required: true, maxLength: 30 })}
            onChange={(e) => setUsername(e.target.value)} 
          />
{errors.user && <p className="text-error">User ID Required</p>}
          
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
        <Button className="form-input-btnx" >
          Login
        </Button>
        </form>
        <span className="form-input-login">
          Dont't Hava an account? Register <a href="signupm">here</a>
        </span>
      </div>
      
     
    </div>
    
    </div>
    
  );
};

export default LoginM;
