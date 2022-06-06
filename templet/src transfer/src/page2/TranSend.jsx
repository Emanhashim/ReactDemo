import React, { useState } from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { cardStyle } from '../components/ReusableStyles';


 function TranSend() {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "green",
        color: "#FFF",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    }
  };
    const history = useHistory();

    const login = () => {
      history.push("/page");
    };
 

 const [formData, setFormData] = useState({
        account: "",
        amount: "",
        remark:""
      });
      const handleSubmit = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    const { account, amount ,remark} = formData;

      return (
        <Section>
        <div className="format">
          <header >
            <form onSubmit={handleSubmit}>
            <h5> Account number</h5>
            <div className="analytic">
            <div className="content">
 
 </div>
            <input type='text' placeholder='Enter Account' className= "form-input" name='account' vlaue={account}onChange={e => handleSubmit(e)}/>
            </div>
            <h5> Set Amount</h5>
            <div className="analytic">
               <input type='text' placeholder='Enter Amount' name='amount' className= "form-input" vlaue={amount}onChange={e => handleSubmit(e)}/>
               <div className="content">
 
 </div>
               </div>
               <h5>Remark</h5>
<div className="analytic">
<input type='text' placeholder='Enter Amount' name='remark' className= "form-input" vlaue={remark}onChange={e => handleSubmit(e)}/>
  <div className="content">
    
  </div>
 

   

  
</div>
               <Link to={`/page2/${account}/${amount}/${remark}`} >
        <button type="button"className="btn">Go</button>
      </Link>
              </form>
          </header>
        
        </div>
        </Section>
      );
  
    }
   
    export default TranSend;
    const Section= styled.section`
margin-left: 40vw;
padding: 2rem;
height: 100%;
display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  .format{
   
.btn {
  width: 20%;
  height: 50px;
  margin-top: 10px;

  background: linear-gradient(
    90deg,
    rgb(251, 255, 39) 0%,
    rgb(251, 255, 39) 100%
  );
  outline: none;
  border: none;
  color: rgb(12, 12, 12);
  font-size: 1rem;
  border-radius: 20px;
}
  .analytic {
      width: 600px;
      height:150px;
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    ${cardStyle};
    padding: 1rem;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    transition: 0.5s ease-in-out;
    border-radius: 1rem 1rem 1rem 1rem ;
    &:hover {
      
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      width: 600px;
      background-color: black;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      
    }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .analytic {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      flex-direction: row-reverse;
    }
  }
}`;