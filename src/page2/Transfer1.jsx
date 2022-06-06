import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMoneyCheckAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import{MdTransferWithinAStation} from "react-icons/md";

import { NavLink as Link, NavLink } from 'react-router-dom';
import {RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiGroup,BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
export default function Transfer1() {
  return (
   <Section>
     <NavLink style={{ textDecoration: 'none' }} to='/trans' activeStyle>
  
   </NavLink>
   <NavLink style={{ textDecoration: 'none' }} to='/Tbank' activeStyle>
<div className="analytic">
  <div className="content">
    <h5>Transfer to Bank</h5>
  </div>
  <div className="logo">
  <BiTransfer/>
  
</div>
</div>

</NavLink>

<NavLink style={{ textDecoration: 'none' }} to='/tsend' activeStyle>
<div className="analytic">
  <div className="content">
    <h5> Send Money</h5>
  </div>
  <div className="logo">
    <GiReceiveMoney/>
  </div>
</div>

</NavLink>
<div className="analytic">
  <div className="content">
    <h5>Local Transfer</h5>
  </div>
  <div className="logo">
    <FaMoneyCheckAlt/>
  </div>
  
</div>

   </Section>
  )
}
const Section= styled.section`
display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  .analytic {
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    border-radius: 5rem 5rem 5rem 5rem ;
    &:hover {
      
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      
      background-color: black;
      border-radius: 3rem;
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