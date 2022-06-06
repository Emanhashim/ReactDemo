import React from "react";
import "./steps.css";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <label className="fo-label">Organization Name</label>
      <input
      id="first"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, orgName: event.target.value })
        }
        
      />
       <label className="fo-label">Organization Type</label>
      <input 
       id="d2"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
       <label className="fo-label" >Business Sector</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> <label className="fo-label">Busines Type</label>
       <input 
       id="d4"
          className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <br/>
      <label  className="fo-label">TIN</label>
       <input id="d5"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        
      />
         <label className="fo-label">Capital</label>
       <input id="d6"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <br/>
      <label className="fo-label">Region</label>
      <input 
       id="d2"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
       <label className="fo-label" >City</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> <label className="fo-label">Sub City</label>
       <input 
       id="d4"
          className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
/> <br/>
        <label className="fo-label">organization Name</label>
        <input 
         id="d2"
         className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
         <label className="fo-label" >organization Name</label>
        <input id="d3"
         className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        /> <label className="fo-label">organization Name</label>
         <input 
         id="d4"
            className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
      /><br/>
     <label  className="fo-label">Phone Number</label>
       <input id="d7"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        
      />
         <label className="fo-label">TIN Certification Document</label>
       <input id="d8"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
       <label className="fo-label">Capital</label>
       <input id="d8"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
