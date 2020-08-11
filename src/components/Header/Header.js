import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = function () {
    const closedIcon = '/assets/icons/icon-menu-close.png';
    const openedIcon = '/assets/icons/hamburger-icon-menu-closed.png';
    const [showMenu, setShowMenu] = useState(false);

    let hamburger;
    let mobileMenu;

    const mobileNav = (
        <nav className="main-nav-mobile">

            <ul className="menu-pages">
                <li><a href="/">About Me</a></li>
                <li><a href="/my-online-cv">My online CV</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="nav-ico">
                <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src="/assets/icons/linked-in.png" alt="linkedIn-icon" /></a>
                <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src="/assets/icons/gitHub.png" alt="gitHub-icon" /></a>
            </div>
            
            <div className="laser-pointer"></div>
        </nav>
    )
    
    if (showMenu) {
        hamburger = closedIcon;
        mobileMenu = mobileNav;
    }

    if (!showMenu) {
        hamburger = openedIcon;
    }


    return (
        <>
            <header className="Header" >
                <nav className="main-nav-desktop container-fluid">
                    <div className='row'>

                        <ul className="menu-pages col-md-9">
                            <li><a href="/">About Me</a></li>
                            <li><a href="/my-online-cv">My online CV</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>

                        <div className="nav-ico col-md-3">
                            <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src="/assets/icons/linked-in.png" alt="linkedIn-icon" /></a>
                            <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src="/assets/icons/gitHub.png" alt="gitHub-icon" /></a>
                        </div>

                    </div>
                </nav>

                <div className="main-nav-toggle">
                    <img src={hamburger} className='toggle-icon' onClick={() => setShowMenu(!showMenu)} />

                    {mobileMenu}
                </div>

                <div className="laser-pointer"></div>
            </header>
        </>
    )
}

export default Header;
