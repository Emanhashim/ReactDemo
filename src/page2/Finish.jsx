import React ,{useEffect} from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from '../components/ReusableStyles';
import { NavLink as Link, NavLink } from 'react-router-dom';
import scrollreveal from "scrollreveal";
import { useHistory, useParams } from "react-router-dom";
export default function Finish() {
 
    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
            nav,
            .row__one,
            .row__two
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
      }, []);
    const transactions = [
        { 
          
          name: "Name ",
         
          amount: "Hailu",
        },
        {
          
          name: "amount",
         
          amount: "8,000Birr",
        },
        {
        
          name: "phone",
        
          amount: "0922001010",
        },
        ,
        {
        
          name: "Remark",
        
          amount: "Salary",
        }
      ];
  return (
    <Section>
    <div className="title">
      <h2> Transfers </h2>
    </div>
    <div className="transactions">
      {transactions.map((transaction) => {
        return (
          <div className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={transaction.image} alt="" />
              </div>
              <div className="transaction__title__details">
                <h3>{transaction.name}</h3>
                <h5>{transaction.time}</h5>
              </div>
            </div>
            <div className="transaction__amount">
              <span>{transaction.amount}</span>
            </div>
          </div>
        );
      })}
    </div>
  

    <NavLink style={{ textDecoration: 'none' }} to='/success' activeStyle>  
    <button className="form-input-btn"  >Send</button>
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/Homex' activeStyle>  
    <button className="form-input-btn"  >Cancel</button>
    </NavLink>
  </Section>
  )
}

const Section= styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
${cardStyle};
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
gap: 1rem;
margin-left: 40vw;
padding: 5rem;
height: 100%;
width: 700px;
.title {
  h2 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.2rem;
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
          height: 1.5rem;
          border-radius: 3rem;
        }
      }
      &__details {
      }
    }
    &__amount {
      background-color: #d7e41e1d;
      padding: 0.2rem 0.5rem;
      width: 9rem;
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