import React from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from '../components/ReusableStyles';
import {FaArrowCircleDown ,FaCalendarDay,FaStopwatch } from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import {RiMoneyDollarCircleLine } from "react-icons/ri";
export default function TransferCH() {
    const jwt =JSON.parse(localStorage.getItem('jwt'));
const summaryw=JSON.parse(localStorage.getItem('summary'));
     
     
    fetch("http://localhost:8080/api/accounts/transaction", {
  method: "GET",
   headers: {
    'Content-Type':'application/json',
          "Accept":"application/json",
          "Authorization":`Bearer ${jwt}`
  }
})
.then(response => response.json())
.then(response => {
    localStorage.setItem('summary', JSON.stringify(response['summary']));
    const summary = localStorage.getItem('summary')
      console.log(summary)
      
   
    
  this.setState({
    friends: response
    
  })
 
})
.catch(err => { console.log(err); 
});
  
  return (
    <Section>
    <div className="title">
      <h2>Your Transfers history</h2>

     
    </div>
    <div className="transactions">
      {summaryw.map((summary) => {
        return (
          <div className="transaction">
            
            <div className="transaction__title">
              
              <div className="transaction__title__image">
              <FaArrowCircleDown color='blue'/>
              </div>
              <div className="transaction__title__details">
           
              <h5 id='na1'  > <RiMoneyDollarCircleLine  color='blue'/>From Account:</h5><h5 id='na2'>{summary. accountNumber}</h5>
              <h5 id='na1'><GiPayMoney color='green'/>To Account</h5>  <h5 id='na2'>{summary.fromAccountNumber}</h5>
                <h5 id='na1' ><GiTakeMyMoney color='red'/>Transaction Amount:</h5><h5 id='na2'>{summary.transactionAmount}</h5>
                <h5 id='na1'><FaCalendarDay color='purple' />Type:</h5><h5 id='na2'>{summary.transaction_type} </h5>             
                <h5 id='na1'><FaStopwatch  color='#0a65a1' />Time:</h5> <h5 id='na2'>{summary.transactionDateTime}</h5>
               
              </div>
            </div>
            <div className="transaction__amount">
            
         
          
       
       
           
            </div>
          </div>
        );
      })}
    </div>
    
  </Section>
  )
}

const Section= styled.section`
${cardStyle};
margin-left: 40vw;
margin-top: 1vw;
padding: 2rem;
width: 800px;
height:850px;
background-color: white;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
gap: 1rem;
.title {
  h2 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    margin-left: 8vw;
  }
}
.transactions {
  
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .transaction {
    
    width: 650px;
    margin-left: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__title {
      
      gap: 1rem;
      &__image {
        margin-left: 10vw;
        img {
          height: 2.5rem;
          border-radius: 3rem;
          
        }
      }
      &__details{
      
         {
       
        display:inline;
        display: inline-block;
      
        }
        #na2{
          text-align: left;
          padding: 0.2rem 0.5rem;
       
      }
      #na1{
        color:#080808;
        display:inline;
        float:left;
        padding: 0.2rem 0.5rem;
    }
     
    }
    &__amount {
        
        
      #na2{
        color: #ffc107;
        display:inline;
        float:right;
     
    }
    
      
      }
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    margin-right: 15vw;
    background-color: #ffc107;
      padding: 0.2rem 0.5rem;
      width: 900px;
      border-radius: 1rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }
      span {
        color: #ffc107;
      }
    }
  }
}
.view {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: #ffc107;
  font-weight: bold;
  margin-top: 1rem;
  gap: 0.5rem;
  svg {
    transition: 0.3s ease-in-out;
    font-size: 1.4rem;
  }
  &:hover {
    svg {
      transform: translateX(0.5rem);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 375px) {
  .transactions {
    .transaction {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
}
`;