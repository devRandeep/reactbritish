import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Col, Dropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export default function Header() {
  const logoImage = "https://greatbritish.b-cdn.net/wp-content/uploads/2022/01/gbt-logo.png"
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  //  Menu Open when click on toggle button;
  const toggleMenu = () => {
    const logoWrap = document.querySelector('.menuLink');
    logoWrap.classList.toggle('logoWrapHidden');
  };
  // Menu close when click on menu; 
  const closeMenu = () => {
    const logoWrap = document.querySelector('.menuLink');
    logoWrap.classList.remove('logoWrapHidden');
  }

  return (
    <>
      <header>
        <Row className="align-items-center desktopHeader">
          <Col md={4}>
            <div className="logoWrap">
              <Link to="/">
                <img src={logoImage} alt="" />
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <ul className="appMenuList">
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>About</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="rightHeader">
              <li><span><svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-g</title><path d="M478.94,370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83,3.83,0,0,0-3.92.49c-11.63,9.07-31.21,25.73-32.26,26.63-6.78,5.81-6.78,5.81-12.33,4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56,4-12.34.9-1.05,17.57-20.63,26.64-32.25a3.83,3.83,0,0,0,.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52A3.9,3.9,0,0,0,138,32.2,322.35,322.35,0,0,0,82,57.65,338,338,0,0,0,33.35,92a3.83,3.83,0,0,0-1.26,3.74c2.09,9.74,12.08,50.4,43.08,106.72,31.63,57.48,53.55,86.93,100,133.22S252,405.21,309.54,436.84c56.32,31,97,41,106.72,43.07a3.86,3.86,0,0,0,3.75-1.26A337.73,337.73,0,0,0,454.35,430a322.7,322.7,0,0,0,25.45-56A3.9,3.9,0,0,0,478.94,370.14Z"></path></g></svg></span>+44 1753 439 289</li>
              <li>
                <Link to="/contactus" exact>Contact</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mobileHeader">
          <div className="mehuToggleButton">
            <span className="toggleIcon" onClick={toggleMenu}> <img src="https://greatbritish.b-cdn.net/wp-content//uploads/2024/05/menu_toggel.png" alt="" /></span>
          </div>

          <div className="logoWrap">
            <Link to="/">
              <img src={logoImage} alt="" />
            </Link>
          </div>

          <div className="menuLink">
            <ul>
              <li><NavLink to="/" onClick={closeMenu} exact>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu} exact>About</NavLink></li>
              <li><NavLink to="/contactus" onClick={closeMenu} exact>Contact</NavLink></li>
            </ul>
          </div>
        </Row>
      </header>
    </>
  );
}
