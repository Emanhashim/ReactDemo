import React ,{useEffect} from "react";
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import imagex from "../assets/righx.gif";
import { HiOutlineLocationMarker , HiCash} from "react-icons/hi";
import { cardStyle } from "../components/ReusableStyles";
import { NavLink as Link, NavLink } from 'react-router-dom';
import scrollreveal from "scrollreveal";
export default function SuccessForm() {
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
      
      <div className="image">
        <img src={imagex} alt="" />
      </div>
      <div className="title">
        <h2>Registered successfully</h2>
       
        <h5>
         
        </h5>
        <NavLink style={{ textDecoration: 'none' }} to='/dAgent' activeStyle>  
    <button className="form-input-btn"  >Done</button>
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
  background: white;
  height: 500px;
width: 700px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin-left: 40vw;
  margin-top: 4vw ;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
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