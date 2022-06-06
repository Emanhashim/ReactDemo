import React ,{useEffect} from "react";
import styled from "styled-components";
import image from "../assets/code.jpg";
import imagex from "../assets/righx.gif";
import { HiOutlineLocationMarker , HiCash} from "react-icons/hi";
import { cardStyle } from "../components/ReusableStyles";
import { NavLink as Link, NavLink } from 'react-router-dom';
import scrollreveal from "scrollreveal";
export default function Deposit() {
    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
           .my, .title
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
      }, []);
  return (
    <Section className="my">
        <div className="title">
        <h2>Code Bz123456p2</h2>
        <h3></h3>
        
        </div>
     
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
       
        <h3></h3>
        <h5>
          
        </h5>
        <NavLink style={{ textDecoration: 'none' }} to='/Homex' activeStyle>  
    <button className="btn"  >5000 Birr</button>
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/Homex' activeStyle>  
    <button className="btn"  >Change Amount</button>
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/Homex' activeStyle>  
    <button className="btn"  >Save Image</button>
    </NavLink>
      </div>
      <div className="info">
        <div className="container">
          <h5></h5>
          <h3></h3>
        </div>
        <div className="container">
          <h5></h5>
          <h3></h3>
        </div>
        <div className="container">
          <h5></h5>
          <h3></h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyle};
  height: 800px;
width: 700px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin-left: 40vw;
  margin-top: 1vw ;
  align-items: center;
  gap: 2rem;
  .btn {
    box-shadow: 0 0 2px #080808;
    width: 100%;
    height: 50px;
    margin-left: 1vw;
    margin-top: 0.1vw;
    gap: 2rem;
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
  .image {
    max-height: 60rem;
    overflow: hidden;
 
    img {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      height: 30rem;
      width: 30rem;
      object-fit: cover;
  
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;