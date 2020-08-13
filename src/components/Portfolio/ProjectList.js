import React from 'react';

import HTML5Icon from './assets/icons/html5-brands.svg';
import CSSIcon from './assets/icons/css3-alt-brands.svg';
import JSIcon from './assets/icons/js-brands.svg';
import reactIcon from './assets/icons/react-brands.svg';
import gitHubIcon from './assets/icons/gitHub.png'

const ProjectList = function ({ projects }) {
  const project = projects.map(project => {
    const usedTechImages = project.usedtech.map(tech => {
      if (tech === "HTML") {
        return <img className="tech" src={HTML5Icon} alt="tech-icon" />
      };
      if (tech === "CSS") {
        return <img className="tech" src={CSSIcon} alt="tech-icon" />
      };
      if (tech === "Javascript") {
        return <img className="tech" src={JSIcon} alt="tech-icon" />
      };
      if (tech === "React") {
        return <img className="tech" src={reactIcon} alt="tech-icon" />
      };
    });

    return (
      <article className="portfolio-article col-sm-6 col-md-6 col-lg-4 mb-5">

        <a href={`/portfolio/${project.id}/`} className="portfolio-item"><img src={project.image} alt="Image" className="img-fluid" /></a>

        <div className="proj-details">

          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank"><img className="icon-smedia" src={gitHubIcon} alt="gitHub-icon" /></a>
          <p>Tecnologies used</p>
          <div className="used-tech">{usedTechImages}</div>

        </div>

      </article>
    );
  });

  return <>{project}</>
};

export default ProjectList;