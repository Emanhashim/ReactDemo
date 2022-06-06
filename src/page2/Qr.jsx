import React, { useRef } from 'react'
import Webcam from "react-webcam";
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMoneyCheckAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import{MdTransferWithinAStation} from "react-icons/md";
import { AiOutlineScan } from "react-icons/ai";


import { NavLink as Link, NavLink } from 'react-router-dom';
import {RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiGroup,BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
export default function Qr() {
    const WebRef =useRef(null);
   
  return (
   <Section>
     <NavLink style={{ textDecoration: 'none' }} to='/trans' activeStyle>  </NavLink>
  


  

  


<h5>Remark</h5>
<div className="analytic">
  <div className="content">
    
  </div>
 
  
<Webcam ref ={WebRef}/>
  
</div>

<NavLink style={{ textDecoration: 'none' }} to='/finishThree' activeStyle>  
    <button className="btn"  >Scanning QR Code-  <AiOutlineScan/></button>
   
    </NavLink>
   
   </Section>
  )
}
const Section= styled.section`
margin-left: 40vw;
margin-top: 8vw;
padding: 2rem;
height: 100%;
display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  .btn {
    box-shadow: 0 0 2px #080808;
    width: 20%;
    height: 50px;
    margin-left: 8vw;
    margin-top: 8vw;
  
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
    gap: 1rem;
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