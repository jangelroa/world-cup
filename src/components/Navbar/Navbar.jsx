import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  MobileNavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavDropDownList,
} from "./NavbarElements";
import { ThinLine, MobileThinLine } from "../smallComponents";
import logo from "../../images/qatar-logo.jpg";
import { Link } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      const dimentions = getWindowDimensions();
      setWindowDimensions(dimentions);
      if (dimentions.width > 768) {
        setShowMobileMenu(false);
      }
      console.log({ dimentions });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" style={{ height: "80px" }} />
        </NavLink>
        <Bars onClick={() => setShowMobileMenu((show) => !show)} />
        <NavMenu>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/matches">GAMES</NavLink>
          <NavLink to="/team-scores" style={{ fontWeight: "bold" }}>
            TEAMS
          </NavLink>
          <NavLink to="/user-scores" style={{ fontWeight: "bold" }}>
            PARTICIPANTS
          </NavLink>
          <NavLink to="/add-pool">ADD POOL</NavLink>
        </NavMenu>
      </Nav>
      <NavDropDown
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </>
  );
};

export default Navbar;

const NavDropDown = ({ showMobileMenu, setShowMobileMenu }) =>
  showMobileMenu && (
    <div
      className="nav-drop-down-list"
      onClick={() => setShowMobileMenu(false)}
    >
      <MobileThinLine />
      <ul>
        <li>
          <MobileNavLink to="/">HOME</MobileNavLink>
          <MobileThinLine />
        </li>
        <li>
          <MobileNavLink to="/matches">GAMES</MobileNavLink>
          <MobileThinLine />
        </li>
        <li>
          <MobileNavLink to="/team-scores" style={{ fontWeight: "bold" }}>
            TEAMS
          </MobileNavLink>
          <MobileThinLine />
        </li>
        <li>
          <MobileNavLink to="/user-scores" style={{ fontWeight: "bold" }}>
            PARTICIPANTS
          </MobileNavLink>
          <MobileThinLine />
        </li>
        <li>
          <MobileNavLink to="/add-pool">ADD POOL</MobileNavLink>
          <MobileThinLine />
        </li>
      </ul>
    </div>
  );
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
