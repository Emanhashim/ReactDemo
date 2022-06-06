import React from "react";
import { useState, useEffect, useMemo  ,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../components/FontawsomeIcons";
import scrollreveal from "scrollreveal";
import { Form, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import "./Form1.css";
const Signup = () => {
  const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        handleClick()
       }
       const passwordx = useRef({});
       passwordx.current = watch("passwordx", "");

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
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

  const history = useHistory();

  const login = () => {
    history.push("/ver");
  };
  const [agree, setAgree] = useState(false);
  const [firstName, setFirst_Name] = useState("");
  const [lastName, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setRe_password] = useState("");
  const [country, setCountry] = useState("");
  const [birthDay, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState();
  const [app_user, setApp_user] = useState([]);
  const [username , setUsername] = useState("");

  const handleClick = (e) => {
   
    signupxx()
  
    
    
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    // Don't miss the exclamation mark
  };
  async function signupxx(){
 
    console.warn(username.password)
    const userinfo = {
      birthDay,
      confirmPassword,
      country,
      email,
      firstName,
      gender,
      lastName,
      password,
      username,
     
     
    
    };
   
    let item={birthDay,
      confirmPassword,
      country,
      email,
      firstName,
      gender,
      lastName,
      password,
      username,};
   const options={
        method:'POST',
        headers:{
  
            'Content-Type':'application/json',
            "Accept":"application/json",
           
           
        },
        body:JSON.stringify(item)
        
    }
    const url =("http://localhost:8080/api/users/signup")
    try{
     const response= await fetch(url,options);
      const result =await response.json();
     console.log(result);
      localStorage.setItem("user-info",JSON.stringify(result))
      if(response.ok){
        console.log("Signup successful")
        swal("Successful", "Welcom", "success", {
          buttons: false,
          timer: 2000,
        })
        history.push("/login")
      }else{
        console.log("failed")
      swal("Failed To Signup", "Error", "error")
      }
      }catch(error) {
        console.error(error);
      }
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
      
        <div className='form-containerxx'>
      

    <form className="form" onSubmit={handleSubmit(onSubmit)}>


        <div className="form-inputs">
            <label className="form-label">Phone Numer</label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="ET"
              value={username}
          
              onChange={setUsername}
              
            />
 

          </div>
          <div className="form-inputs">
            {/* country */}
            <FontAwesomeIcon icon="globe" className="fa" />
            <label className="form-label">Country List</label>
     

<input
  className="form-input"
  type="text"
  name="first_name"
  placeholder="Enter your Country"

  {...register("first", { required: true, maxLength: 30 })}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
 
/>
          </div>
          {errors.first && <p className="text-error">Country is Required</p>}
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">First Name</label>

            <input
              className="form-input"
              type="text"
              name="first_name"
              placeholder="Enter your First name"
              value={firstName}
              {...register("First", {
                required: {
                  value: true,
                  message: "Please enter your Firt Name",
                },
                minLength: {
                  value: 2,
                  message: " must have at least 2 characters"
                      },
              })}
              onChange={(e) => setFirst_Name(e.target.value)}
            />
          </div>
          {errors.First && <p className="text-error">{errors.First.message}</p>}
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">Last Name</label>

            <input
              className="form-input"
              type="text"
              name="last_name"
              placeholder="Enter your Last name"
              value={lastName}
              onChange={(e) => setLast_Name(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="envelope" className="fa" />
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="text-error">{errors.email.message}</p>}
          <div className="form-inputs">
            <span className="form-input-icon">
              <FontAwesomeIcon icon="calendar" className="fa" />
            </span>

            <label className="form-label">Birthdate</label>
            <input
              type="date"
              className="form-input"
              placeholder="Enter BirthDate"
              value={birthDay}
              {...register("user", { required: true, maxLength: 30 })}
              onChange={(e) => setBirth(e.target.value)}
              name="birthdate"
            />
          </div>
          {errors.user && <p className="text-error">BirthDate is Required</p>}
          
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">Gender</label>

            <input
              className="form-input"
              type="text"
              name="gender"
              placeholder="Enter your gender"
              value={gender}
              {...register("user", { required: true, maxLength: 30 })}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          {errors.user && <p className="text-error">Gender is Required</p>}
          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">Password</label>
            <input
              className="form-input"
              name="passwordx"
                type="password"
              {...register("passwordx",{
                required: "You must specify a password",
               minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
                }})}
             
              onChange={(e) => setPassword(e.target.value)}
            />
               {errors.passwordx && <p>{errors.passwordx.message}</p>}
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">Confirm Password</label>
            <input
                className="form-input"
                name="password_repeat"
                type="password"
                 {...register("password_repeat",{ validate: value =>
                    value === passwordx.current || "The passwords do not match"
                  })}
            
                  onChange={(e) =>  setRe_password(e.target.value)}
                 
            />
          </div>
          {errors.password_repeat && <p className="text-error">{ errors.password_repeat.message}</p>}
        <Button className="form-input-btncc"  
           >
        Sign up
        </Button>
        <span className="form-input-login">
            Already have an account? Login <a href="/login">here</a>
          </span>
        </form>
       
      </div>
      
     
    </div>
    
    
    
  );
};

export default Signup;
