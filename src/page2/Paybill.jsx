
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMoneyCheckAlt,FaArrowCircleRight} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack,} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import{MdTransferWithinAStation} from "react-icons/md";
import React ,{useEffect} from "react";
import { NavLink as Link, NavLink } from 'react-router-dom';
import {RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiGroup,BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
import scrollreveal from "scrollreveal";
export default function Paybill() {

    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
          .da,
           .analytic,
           .content
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
      }, []);
  return (
   <Section className='da'>
    



<NavLink style={{ textDecoration: 'none' }} to='/dashPay' activeStyle>
<div className="analytic">
  <div className="content">
    <h5> Pay Bill</h5>
  </div>
  <div className="logo">
    <GiReceiveMoney/>, <FaArrowCircleRight/>
  </div>
</div>

</NavLink>
<div className="analytic">
  <div className="content">
    <h5>TOP-UP</h5>
  </div>
  <div className="logo">
    <FaMoneyCheckAlt/>, <FaArrowCircleRight/>
  </div>
  
</div>

   </Section>
  )
}
const Section= styled.section`
display: grid;
margin-top: 10vw ;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-left: 45vw;
padding: 2rem;
height: 100%;
  .analytic {
    height: 100px;
    width: 300px;
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