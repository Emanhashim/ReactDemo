import React from "react";
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Hailu</h2>
        <h5>
          <HiOutlineLocationMarker /> Addis Ababad, Ethiopia
        </h5>
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
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
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