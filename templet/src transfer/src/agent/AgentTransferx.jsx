
import React ,{useEffect,useState,}from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMoneyCheckAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import{MdTransferWithinAStation} from "react-icons/md";
import Combobox from "react-widgets/Combobox";
import { useHistory } from "react-router-dom";

import { NavLink as Link, NavLink } from 'react-router-dom';
import {RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiGroup,BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
export default function AgentTransfer() {


   
  const history=useHistory();
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [toaccountNumber, setToaccountNumber] = useState("");
    useEffect(()=>
{
  if(localStorage.getItem("user-info")){
     
  }
},[])
async function login(){
 
  console.warn(amount.message.toaccountNumber)
  const users={amount,message,toaccountNumber}
 
  let item={amount,message,toaccountNumber};
 const options={
      method:'POST',
      headers:{

          'Content-Type':'application/json',
          "Accept":"application/json",
          "Authorization":`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTYwMTQ4NDU0IiwiZXhwIjoxNjUzMDYzMjIwLCJpYXQiOjE2NTMwMjcyMjB9.rR6rso5pJ-IsyN7u1QkkWYSF9aRD9r1O3OhPWdTvBvc`
         
      },
      body:JSON.stringify(item)
      
  }
  const url ="http://localhost:8080/api/accounts/sendmoney"
  try{
   const response= await fetch(url,options);
    const result =await response.json();
   console.log(result);
    localStorage.setItem("user-info",JSON.stringify(result))
if(response.ok){
  console.log("login successful")
  window.alert("sucessuful")
  history.push("/dAgent")
}else{
  console.log("failed")
  window.alert("Wrong password or email address")
}
}catch(error) {
  console.error(error);
}

 
}
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
  return (
      
   <Section>
     <NavLink style={{ textDecoration: 'none' }} to='/trans' activeStyle>  </NavLink>
  
  <div className="format">
     <h1>Transfer to Bank</h1>
   
   <h5>Select bank</h5>

  <div className="content">
  <select   styles={colourStyles}> <option value="grapefruit">Commerical Bank of Ethiopia</option>
            <option value="Awash International Bank.">Awash International Bank.</option>
            <option value="Dashen Bank.">Dashen Bank</option>
            <option value="Nib International Bank">Nib International Bank</option>
          </select>
  </div>
  

 

  <h5> Account number</h5>
<div className="analytic">
  <div className="content">
 
  </div>
  <input type="text" name='toaccountNumber' className= "form-input" placeholder='Enter Account number' value={toaccountNumber}
  onChange={(e) =>setToaccountNumber(e.target.value)}
  />

</div>

<h5> Set Amount</h5>
<div className="analytic">
  <div className="content">
   
  </div>

  <input type="text" name='amount' className= "form-input" placeholder='Enter Amount' value={amount}
  
  onChange={(e) =>setAmount(e.target.value)}/>
  
  
</div>

<h5>Remark</h5>
<div className="analytic">
  <div className="content">
    
  </div>
 
  <input type="text" name='message'  className= "form-input" placeholder='Enter Remark' value={message}
  onChange={(e) =>setMessage(e.target.value)}/>

  
</div>

    <button className="btn" onClick={login} >Next</button>
  
</div>

 
   </Section>
   
  )
}
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