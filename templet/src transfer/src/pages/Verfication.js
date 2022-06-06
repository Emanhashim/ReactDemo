import React from 'react';
import './Form2.css';
import ReactInputVerificationCode from 'react-input-verification-code';
import { useHistory } from "react-router-dom";

const Verfication = () => {
    const history = useHistory();
  
    const login = () => {
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
      
         <div className='ver'>
               <ReactInputVerificationCode />
               <a href='#'>Send Again</a>
               
               </div>
               
        <button className="btn"  onClick={login}>
          Sumbite
        </button>
        
        </div>
    </div>
  );
};

export default  Verfication ;
