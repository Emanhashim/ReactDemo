import React from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from "./ReusableStyles";

export default function TransferCH() {
    const jwt =JSON.parse(localStorage.getItem('jwt'));
    const summaryx =JSON.parse(localStorage.getItem('summary'));
     
     
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
      {summaryx.map((summary) => {
        return (
          <div className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__image">
               
              </div>
              <div className="transaction__title__details">
                <h5>From Account Number: {summary.fromAccountNumber}</h5>
                <h5>Transaction Amount:</h5>   
                <h3>transaction_Type: {summary.transaction_type}</h3>                     
                <h3>Transaction Time:{summary.transactionDateTime}</h3>
              </div>
            </div>
            <div className="transaction__amount">
            {summary.transactionAmount}
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
width: 600px;
height:750px;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
gap: 1rem;
.title {
  h2 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
  }
}
.transactions {
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .transaction {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__title {
      display: flex;
      gap: 1rem;
      &__image {
        img {
          height: 2.5rem;
          border-radius: 3rem;
        }
      }
      &__details {
      }
    }
    &__amount {
      background-color: #d7e41e1d;
      padding: 0.2rem 0.5rem;
      width: 4rem;
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