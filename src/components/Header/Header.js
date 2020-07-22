import React from 'react';
import './Header.css';



const Header = () => {

    return (
        <>
            <header className="Header">

                <nav className="main-nav container-fluid">

                    <div className='row'>

                        <ul className="menu-pages col-md-9">
                            <li><a href="/">About Me</a></li>
                            <li><a href="/my-online-cv">My online CV</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>

                        <div className="nav-ico col-md-3">
                            <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src="/assets/icons/linked-in.png" alt="linkedIn-icon" /></a>
                                <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src="/assets/icons/gitHub.png" alt="gitHub-icon" /></a>
                        </div>

                    </div>

                </nav>

            </header>
        </>
    )
}

export default Header
