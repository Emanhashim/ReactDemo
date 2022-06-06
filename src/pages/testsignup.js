import React from "react";
import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../components/FontawsomeIcons";
import scrollreveal from "scrollreveal";
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

import "./Form1.css";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        handleClick()
       }



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
    e.preventDefault();
    
    
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
    const url =("http://ec2-204-236-198-55.compute-1.amazonaws.com:8080/api/users/signup")
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className="form-containerxx">
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
          {errors.first && <p className="text-error">User ID Required</p>}
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">First Name</label>

            <input
              className="form-input"
              type="text"
              name="first_name"
              placeholder="Enter your First name"
              value={firstName}
              onChange={(e) => setFirst_Name(e.target.value)}
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
              onChange={(e) => setBirth(e.target.value)}
              name="birthdate"
            />
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">Gender</label>

            <input
              className="form-input"
              type="text"
              name="gender"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="re_password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setRe_password(e.target.value)}
            />
          </div>

          <div className="form-inputsx">
         
           
          </div>
          <button
            className="btnC"
        
           onClick={handleClick }
          
          >
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Login <a href="/login">here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
