
import React ,{useEffect} from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.jpeg";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyle } from '../components/ReusableStyles';
import { NavLink as Link, NavLink } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
 const Page2 = () => {
    let history = useHistory();
    const { account, amount,remark } = useParams();
    const transactions = [{ 
          
      name: "Name ",
     
      amountx: "Hailu",
    }];
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
                  <h1>Account: </h1>
                  <h1>Amount: </h1>
                  <h1>Remark: </h1>
              </div>
            </div>
            <div className="transaction__amount">
            <h1 id='ac'>{account}</h1>
            <h1>{amount}</h1>
            <h1>{remark}</h1>
            </div>
          </div>
        );
      })}
    </div>
    <NavLink style={{ textDecoration: 'none' }} to={`/success/${amount}/${account}`} activeStyle>  
    <button className="form-input-btn"  >Send</button>
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/Homex' activeStyle>  
    <button className="form-input-btn"  >Cancel</button>
    </NavLink>
      </Section>
    )
};

export default Page2; 
const Section= styled.section`
margin-left: 18vw;
margin-top: 10vw;
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
    margin-left: 10vw;
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
        color: yellow;
       
      }
    }
    &__amount {
      h1 {
        display: flex;
        &:hover {
        
            color: yellow;
          
      }
    }
      text-align: start;
      margin-right: 90vw;
      padding: 0.2rem 0.5rem;
      width: 9rem;
      border-radius: 1rem;
      text-align: center;
      transition: 0.3s ease-in-out;
     &:hover {
        
        span {
          color: black;
        }
      }
      span  {
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