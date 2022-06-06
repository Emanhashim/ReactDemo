import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMobile,FaWifi,FaTrafficLight,FaBus,FaPlane} from "react-icons/fa";
import { FiMonitor} from "react-icons/fi";
import{GiTakeMyMoney,GiPayMoney,GiElectric,GiWaterDrop} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { cardStyle } from '../components/ReusableStyles';
import { NavLink as Link, NavLink } from 'react-router-dom';
import Earnings from '../components/Earnings';


export default function dashPay() {
 
  return (
      <>
     
   <Section>
        <NavLink style={{ textDecoration: 'none' }} to='/send' activeStyle>

   <div className="analytic">
   <div className="content">
       <h5>Mobile <br /> Recharge</h5>
     </div>
     <div className="logo">
    
       <FaMobile/>
    
     </div>
   </div>
   </NavLink>
<div className="analytic">

  <div className="content">
    <h5>Internet Recharge</h5>
   
  </div>
  <div className="logo">
  <FaWifi/>
</div>
</div>

<div className="analytic">

  <div className="content">
    <h5>TV Bill</h5>
  
  </div>
  <div className="logo">
  <FiMonitor/>
</div>
</div>
<div className="analytic">

  <div className="content">
    <h5>Electricity</h5>
   
  </div>
  <div className="logo">
    <GiElectric/>
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Water Bill</h5>
   
  </div>
  <div className="logo">
    <GiWaterDrop/>
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Car Insurance</h5>
   
  </div>
  <div className="logo">
    < AiFillCar/>
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Trafic Penality</h5>
   
  </div>
  <div className="logo">
  <FaTrafficLight/>
  </div>
  
</div><div className="analytic">

<div className="content">
  <h5>Bus Tickets</h5>
 
</div>
<div className="logo">
  <FaBus/>
</div>

</div>
<div className="analytic">

  <div className="content">
    <h5>AirLine Ticket</h5>
   
  </div>
  <div className="logo">
    <FaPlane/>
  </div>
  
</div>



   </Section>
   </>
  )
}
const Section= styled.section`
margin-top: 4vw ;

margin-left: 18vw;
padding: 10rem;
height: 100%;
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  .analytic {
    height: 100px;
    width: 300px;
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