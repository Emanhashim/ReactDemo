import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from "./ReusableStyles"; 
import { NavLink as Link, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Tx from './Tx';
import Formx from '../steps/Formx';
export default function Analytics() {
  const history = useHistory();
  const move = () => {
    history.push(Tx)
}
  return (
   <Section> <NavLink style={{ textDecoration: 'none' }} to='/dep2' activeStyle>
   <div className="analytic">
   
   
     <div className="content">
       <h5>SEND</h5>
       

     </div>
     <div className="logo">
    
       <FaMoneyBillAlt/>
    
     </div>
   </div>
   </NavLink>
<div className="analytic">
<div className="logo">
  <BiArrowFromBottom/>
</div>
  <div className="content">
    <h5>Withdraw</h5>
    
  </div>
  
</div>
<NavLink style={{ textDecoration: 'none' }} to='/pay' activeStyle>
<div className="analytic">
<div className="logo">
  <GiPayMoney/>
</div>

  <div className="content">
    <h5>PAY</h5>
  </div>
</div>
</NavLink>
<NavLink style={{ textDecoration: 'none' }} to='/dep2' activeStyle>
<div className="analytic">

  <div className="content">
    <h5>Deposit</h5>
   
  </div>
  <div className="logo">
    <BiArrowFromBottom/>
  </div>
  
</div>
</NavLink>
   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  .analytic {
    ${cardStyle};
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
    }
    .logo {
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