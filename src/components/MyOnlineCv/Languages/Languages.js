import React from 'react';

import italianFlag from './assets/icons/italian-flag.png';
import englishFlag from './assets/icons/english-flag.png';
import spanishFlag from './assets/icons/spanish-flag.png';
import romanianFlag from './assets/icons/romania-flag.png';

const Languages = function() {
  return (
    <section className="skills-section">

      <div className="content-type">

        <h2>Languages</h2>

      </div>

      <div className="skill-set-lang row">

        <div className="col-3">

          <h3>Italian</h3>
          <img src={italianFlag} alt="italian-flag" />
          <p class="level">Native</p>

        </div>

        <div className="col-3">

          <h3>English</h3>
          <img src={englishFlag} alt="english-flag" />
          <p class="level">Advanced</p>

        </div>

        <div className="col-3">

          <h3>Spanish</h3>
          <img src={spanishFlag} alt="spanish-flag" />
          <p class="level">Advanced</p>

        </div>

        <div className="col-3">

          <h3>Romanian</h3>
          <img src={romanianFlag} alt="romanian-flag" />
          <p class="level">Medium</p>

        </div>

      </div>

    </section>
  );
};

export default Languages;