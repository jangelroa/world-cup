import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/qatar-logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" style={{ height: "80px" }} />
        </NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/add-pool">ADD POOL</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;

{
  /* 
<Nav>
<NavLink to='/'>
<img src='../../images/logo.svg' alt='logo' />
</NavLink>
<Bars />
<NavMenu>
<NavLink to='/about' activeStyle>
  About
</NavLink>
<NavLink to='/services' activeStyle>
  Services
</NavLink>
<NavLink to='/contact-us' activeStyle>
  Contact Us
</NavLink>
<NavLink to='/sign-up' activeStyle>
  Sign Up
</NavLink>
{/* Second Nav */
}
{
  /* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */
}

{
  /*
</NavMenu>
<NavBtn>
<NavBtnLink to='/signin'>Sign In</NavBtnLink>
</NavBtn>
</Nav>

*/
}
