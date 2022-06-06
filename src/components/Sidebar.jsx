import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpeakerGroup ,MdDashboard,MdCardMembership, MdChat} from "react-icons/md";
import scrollreveal from "scrollreveal";
import { FiLogOut } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { NavLink as Link, NavLink } from 'react-router-dom';
import { FaAddressCard, FaTaxi,FaIdCard,FaNewspaper } from "react-icons/fa";
const summary = localStorage.getItem('summary')

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt =JSON.parse(localStorage.getItem('jwt'));

  console.log(jwt)
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    localStorage.removeItem("summary");
    localStorage.removeItem("amount");
    window.location.href = "/login";}
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            
            <FaIdCard />
            <span>Bazra Payment</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <MdSpeakerGroup onClick={() => setNavbarState(false)} />
            ) : (
              <MdSpeakerGroup
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              > <NavLink  to='/login' style={{ textDecoration: 'none' }} activeStyle>
                <a href="#">
               
            
          
                  <MdDashboard />
                  <span> Dashboard</span>
                 
                </a>
                </NavLink >
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              ><NavLink to='/about' style={{ textDecoration: 'none' }} activeStyle>
                <a href="#">
                  <MdCardMembership />
                  <span> Profile</span>
                </a>
                </NavLink>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                  <FaAddressCard/>
                  <span> Payment Details</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <MdChat/>
                  <span>Chat</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <MdSpeakerGroup/>
                  <span> FAQs</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <IoSettings/>
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="logout">
          <a href="#">
            <FiLogOut />
            <button className="logout" onClick={handleLogout}>Logout</button>
          </a>
        </div>
        </div>
        
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">
                <MdDashboard />
                <span> Dashboard</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="#">
                <FaNewspaper />
                <span>Profile</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">
                < FaAddressCard />
                <span> Payment Details</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
                <MdChat />
                <span> Chat</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <MdSpeakerGroup />
                <span> FAQs</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;

  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
              text-decoration: none;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    justify-content: center;
 
   color:black;
    top: 45%;
    left: 0;
    &:hover {
      color: #ffc107;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
   
      
  
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;