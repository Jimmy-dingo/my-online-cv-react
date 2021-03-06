import React from 'react';
import { Link } from "react-router-dom";

import Form from './Form';
import './Contact.css';

import likedInIcon from './assets/icons/linked-in-onHover.png';
import gitHubIcon from './assets/icons/gitHub-onHover.png';
import locationMark from './assets/icons/location-mark.png';

const Contact = function () {
  return (
    <section className="Contact container-fluid">

      <div className="row">

        <div className="left-column col-md-8">

          <div>

            <h1>Gianmarco Procida</h1>
            <h2>Front-end Developer<br />and Designer</h2>
            <p>If you like my work, and in general, my style, and you would like to work together in order to complete your company’s visual/online identity, do drop me a line by using the form on the right side of the screen, by sending me an email or feel free to contact me directly via LinkedIn.<br />
              Looking forward to your messages!
            </p>

          </div>

          <div className="buttons-cont container">

            <Link to="/"><button>About me</button></Link>
            <Link to="/my-online-cv"><button>My Resumee</button></Link>

          </div>

          <div>

            <p className="location container"><span><img src={locationMark} alt="location-mark" /></span> Cluj-Napoca, Romania</p>

          </div>

          <div className="media-icons">

            <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia-cont" src={likedInIcon} alt="linkedIn-icon" /></a>
            <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia-cont" src={gitHubIcon} alt="gitHub-icon" /></a>

          </div>

        </div>

        <div className="right-column col-md-4">

          <Form />

        </div>

      </div>

    </section>
  );
};

export default Contact;