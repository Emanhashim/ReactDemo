import React from "react";
import "./steps.css";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
     
       <label className="fo-label">Name</label>
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
       <label className="fo-label" >Father Name</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> <label className="fo-label">Grand Father Name</label>
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
      <label  className="fo-label">Email</label>
       <input id="d5"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        
      />
         <label className="fo-label">Phone Number</label>
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
        <label className="fo-label">Woreda</label>
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
         <label className="fo-label" >Specific Location</label>
        <input id="d3"
         className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        /> <label className="fo-label">House number</label>
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
<br></br>
      <h1>NOTFICATION</h1>
      <br></br>
      <label className="fo-label">Prefer Notfication channel    </label>
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
       <label className="fo-label" >Notification Phone</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> <label className="fo-label">Notification email </label>
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
<label  className="fo-label">Notification prefer language  </label>
       <input id="d5"
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

export default PersonalInfo;
