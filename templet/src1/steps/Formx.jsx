import React, { useState,useEffect } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

import scrollreveal from "scrollreveal";
import "./steps.css";
import { useHistory } from "react-router-dom";
function Formx() {

  
  
  
    useEffect(() => {
      const sr = scrollreveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        .form-containerx
      `,
        {
          opacity: 0,
          interval: 100,
        }
      );
    }, []);
  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    orgName:"",
  });
 
  const FormTitles = ["Business information", "Owner Information "];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } 
  };
  const history = useHistory();

  const login = () => {
    history.push("/loginm");
  };
  return (
    <div className="formx">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3% hellow" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-containerx">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                login();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formx;
