import React from 'react';
import './MyOnlineCv.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Skills from './Skills/index';
import Education from './Education/Education';
import ProfExperience from './ProfExperience/ProfExperience';
import Languages from './Languages/Languages';

const MyOnlineCv = function () {
  return (
    <section className="my-online-cv container-fluid">

      <div className="container">

        <div className="section-title">

          <h1>My Online CV</h1>
          <h2>A little section about my experience</h2>

        </div>

        <div className="cv-content">

          <Skills />
          <Education />
          <ProfExperience />
          <Languages />

        </div>

      </div>

    </section>
  );
};

export default MyOnlineCv;