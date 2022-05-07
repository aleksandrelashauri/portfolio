import React, { useState } from "react";
import "./Navbar.css";
import Container from "../Container/Container";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(true);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Container>
      <nav className={!colorChange ? "navbar" : "navbar navbar-active"}>
        <div className='navbar-content'>
          <div className='navbar-logo-wrapper'>
            <h1>Portfolio</h1>
          </div>
          <ul className={click ? "navbar-menu" : "navbar-menu menu-active"}>
            <li onClick={() => setClick(true)}>
              <a href='#home' tabindex='1'>
                Home
              </a>
            </li>
            <li onClick={() => setClick(true)}>
              <a href='#about'>About</a>
            </li>
            <li onClick={() => setClick(true)}>
              <a href='#projects'>Projects</a>
            </li>

            <li onClick={() => setClick(true)}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>

          <div className='icon' onClick={() => setClick(!click)}>
            {click ? <FiMenu onClick={() => setClick(!false)} /> : <FaTimes />}
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
