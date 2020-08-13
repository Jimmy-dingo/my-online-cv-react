import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

import HTML5Icon from './assets/icons/html5-brands.svg';
import CSSIcon from './assets/icons/css3-alt-brands.svg';
import JSIcon from './assets/icons/js-brands.svg';
import reactIcon from './assets/icons/react-brands.svg';
import illustratorIcon from './assets/icons/illustrator_icon.svg';
import photoshopIcon from './assets/icons/photoshop_icon.svg';
import seoIcon from './assets/icons/seo.svg';
import resultIcon from './assets/icons/signpost.svg';
import eyeIcon from './assets/icons/eyeglasses.svg';
import analyticalIcon from './assets/icons/bar-chart-line.svg';
import learnIcon from './assets/icons/book.svg';
import teamIcon from './assets/icons/people.svg';
import creativeIcon from './assets/icons/brush.svg';
import likeIcon from './assets/icons/hand-thumbs-up.svg';
import adaptIcon from './assets/icons/diagram-3.svg';

const Skills = function () {
  return (
    <section className="skills-section">

      <div className="content-type">

        <h2>Skills & Abilities</h2>

      </div>

      <div className="skills-subcat">

        <h2>Hard-skills</h2>
        <div className="skill-set row">

          <div className="col-3">

            <h3>HTML5</h3>
            <img src={HTML5Icon} alt="html-html5-icon" />

          </div>

          <div className="col-3">

            <h3>CSS3</h3>
            <img src={CSSIcon} alt="css-css3-icon" />

          </div>

          <div className="col-3">

            <h3>JavaScript</h3>
            <img src={JSIcon} alt="javascript-icon" />

          </div>

          <div className="col-3">

            <h3>React.js</h3>
            <img src={reactIcon} alt="react-icon" />

          </div>

        </div>

        <div className="skill-set row of3">

          <div className="col-4">

            <h3>Illustrator</h3>
            <img src={illustratorIcon} alt="illustrator-icon" />

          </div>

          <div className="col-4">

            <h3>Photoshop</h3>
            <img src={photoshopIcon} alt="photoshop-icon" />

          </div>

          <div className="col-4">

            <h3>SEO</h3>
            <img src={seoIcon} alt="seo-icon" />

          </div>

        </div>

      </div>

      <div className="skills-subcat">

        <h2>Soft-skills</h2>

        <div className="skill-set row">

          <div className="col-md-3 col-sm-6">

            <h3>Result Oriented</h3>
            <img src={resultIcon} alt="result-oriented-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Eye for detail</h3>
            <img src={eyeIcon} alt="eye-for-detail-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Analytical mindset</h3>
            <img src={analyticalIcon} alt="analytical-mindset-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Willingness to learn</h3>
            <img src={learnIcon} alt="willingness-to-learn-icon" />

          </div>

        </div>

        <div className="skill-set row">

          <div className="col-md-3 col-sm-6">

            <h3>Teamwork</h3>
            <img src={teamIcon} alt="teamwork-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Creativity</h3>
            <img src={creativeIcon} alt="creativity-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Integrity</h3>
            <img src={likeIcon} alt="integrity-icon" />

          </div>

          <div className="col-md-3 col-sm-6">

            <h3>Adaptability</h3>
            <img src={adaptIcon} alt="adaptability-icon" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;