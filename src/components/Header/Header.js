import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

import linkedInIcon from './assets/icons/linked-in.png';
import gitHubIcon from './assets/icons/gitHub.png';
import closedIcon from './assets/icons/icon-menu-close.png';
import openedIcon from './assets/icons/hamburger-icon-menu-closed.png';

const Header = function () {
  const [showMenu, setShowMenu] = useState(false);
  const [easeInAnim, setEaseInAnim] = useState(false);

  const animateMobileNav = useSpring({
    from: { height: '0vh', opacity: 0 },
    to: { height: '100vh', opacity: 1 },
    config: { duration: 2500 }
  });

  let hamburger;
  let mobileMenu;

  const mobileNav = (
    <animated.nav className="main-nav-mobile" style={animateMobileNav}>

      <ul className={`menu-pages ${easeInAnim ? "animated-toggle-icon" : null}`}>

        <li><a href="/">About Me</a></li>
        <li><a href="/my-online-cv">My online CV</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>

      <div className={`nav-ico ${showMenu ? "mobile-menu-anim" : null}`}>

        <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src={linkedInIcon} alt="linkedIn-icon" /></a>
        <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src={gitHubIcon} alt="gitHub-icon" /></a>

      </div>

      <div className="laser-pointer"></div>

    </animated.nav>
  );

  if (showMenu) {
    hamburger = closedIcon;
    mobileMenu = mobileNav;
  };

  if (!showMenu) {
    hamburger = openedIcon;
  };

  return (
    <header className="Header">

      <nav className="main-nav-desktop container-fluid">

        <div className='row'>

          <ul className="menu-pages col-md-9">

            <li><a href="/">About Me</a></li>
            <li><a href="/my-online-cv">My online CV</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>

          </ul>

          <div className="nav-ico col-md-3">

            <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src={linkedInIcon} alt="linkedIn-icon" /></a>
            <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src={gitHubIcon} alt="gitHub-icon" /></a>

          </div>

        </div>

      </nav>

      <div className="main-nav-toggle">

        <img src={hamburger} className={`toggle-icon ${easeInAnim ? "animated-toggle-icon" : null}`} onClick={(e) => { setShowMenu(!showMenu); setEaseInAnim(!easeInAnim) }} />
        {mobileMenu}

      </div>

      <div className="laser-pointer"></div>

    </header>
  );
};

export default Header;
