import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to='/send' activeStyle>
            
          </NavLink>
        <NavLink to='/'>
          <img src={require('../../images/bazrax4.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/Homex' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
         
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn><NavBtn>
          <NavBtnLink to='/loginm'>Merchant</NavBtnLink>
          <NavBtnLink to='/logina'>Agent</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;
