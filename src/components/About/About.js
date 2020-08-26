import React from 'react';
import { Link } from "react-router-dom";

import myPhoto from './assets/images/about-me-photo.jpg';
import './About.css';

const About = function () {
  return (
    <>
      <section className="headline">

        <h1>Gianmarco Procida</h1>
        <h2>WebDesigner<span>/</span>Developer</h2>

        <div>

          <Link to="/portfolio"><button>Portfolio</button></Link>
          <Link to="/contact"><button>Contact</button></Link>

        </div>

      </section>

      <section className="about-me">

        <div className="container">

          <div className="section-title">

            <h1>About Me</h1>
            <h2>A couple of words about me</h2>

          </div>

          <div className="row">

            <div className="about-me-photo col-md-6">

              <figure>
                <img src={myPhoto} alt="my-personal-photo" />
              </figure>

            </div>

            <div className="about-me-description col-md-6">

              <p>A former urbanist with a keen eye for clean designs and a passion for building websites, I have perfected my skills in order to be able to deliver eye-catching, <strong>functional websites</strong>. <br/><br/>
              With digital design, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong> and <strong>ReactJS</strong> skills, together with a passion for delivering impeccable work through good communication with the client and hard work, I will tackle any challenge which comes my way.<br/><br/>
              From <strong>graphic design</strong> requests for any type of <strong>promotional material</strong> to complex and <strong>responsive web designs</strong>, I will be more than happy in helping you create the <strong>business image</strong> of your dreams.<br/><br/>
              I like to consider myself an artist (I just replaced the brush and paper with a keyboard), and I will put my heart, soul, and artistic eye into your project! Do not hesitate to <a href="./contact">contact me</a> so we can start building your vision.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default About;