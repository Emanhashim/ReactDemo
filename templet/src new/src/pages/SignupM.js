import React from "react";
import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../components/FontawsomeIcons";
import scrollreveal from "scrollreveal";
import { NavLink as Link, NavLink } from 'react-router-dom';

import "./Form1.css";

const SignupM = () => {
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
    history.push("/confirm");
  };
  const [agree, setAgree] = useState(false);
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [country, setCountry] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState();
  const [app_user, setApp_user] = useState([]);

  const handleClick = (e) => {
    setAgree(!agree);

    e.preventDefault();
    const app_user = {
      first_name,
      last_name,
      email,
      re_password,
      password,
      country,
      phone,
      birth,
    };
    console.log(app_user);
    fetch("http://localhost:8080/api/v1/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(app_user),
    }).then(() => {
      console.log("added");
    });
  };
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    // Don't miss the exclamation mark
  };

  const btnHandler = () => {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className="form-container">
        <form className="form">
          <h1>Register Here</h1>
          <div className="form-inputs">
            <label className="form-label">Phone Numer</label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="ET"
              value={phone}
              onChange={setPhone}
            />
          </div>
          
          <div className="form-inputs">
            <FontAwesomeIcon icon="user" className="fa" />
            <label className="form-label">UserName</label>

            <input
              className="form-input"
              type="text"
              name="first_name"
              placeholder="Enter your first_name"
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
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

            <label className="form-label">Region</label>
            <input
              type="text"
              className="form-input"
              placeholder="Region"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              name="birthdate"
            />
          </div>

          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">City</label>
            <input
              className="form-input"
              type="text"
              name="city"
              placeholder="Enter your City"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <FontAwesomeIcon icon="lock" className="fa" />
            <label className="form-label">organization type</label>
            <input
              className="form-input"
              type="text"
              name="organization type"
              placeholder="Enter your oranization"
              value={re_password}
              onChange={(e) => setRe_password(e.target.value)}
            />
          </div>

          <div className="form-inputsx">
         
            <label htmlFor="agree">
              {" "}
              I agree to <b>terms and conditions</b>
            </label>
          </div>
          <button
            className="btnM"
            type="submit"
            onClick={(e) => {
              login();
              handleClick(e);
            }}
          >
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Login <NavLink style={{ textDecoration: 'none' }} to='/form' activeStyle>here</NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignupM;
