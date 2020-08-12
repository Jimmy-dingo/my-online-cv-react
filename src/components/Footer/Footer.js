import React from 'react';
import './Footer.css';

const Footer = function () {
  return (
    <footer className="Footer container-fluid">

      <div className="credits">
        <div className="col-sm-6"> <p>Gianmarco Procida © 2020 - All rights reserved </p></div>
        <div className="col-sm-6">
          <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia" src="/assets/icons/linked-in.png" alt="linkedIn-icon" /></a>
          <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia" src="/assets/icons/gitHub.png" alt="gitHub-icon" /></a>
        </div>
      </div>

      <div className="laser-pointer-footer"></div>

    </footer>
  );
};

export default Footer;