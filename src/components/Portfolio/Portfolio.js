import React, { useState, useEffect } from 'react';
import './Portfolio.css';

import ProjectList from './ProjectList';
import projectsJSON from './portfolio.json';
import LoadingPage from './LoadingPage';

const Portfolio = function () {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("development");

  useEffect(() => {
    const fetchProjects = () => {
      setLoading(true);
      const projectList = projectsJSON;
      setProjects(projectList);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section className="Portfolio container-fluid">

      <div className="container">

        <div className="section-title">

          <h1>Portfolio</h1>
          <h2>An overview of my projects</h2>

        </div>

          <div className="btn-container">
            <button className={`portfolio-type-btn ${projectType === "development" ? "active-type" : null}`} onClick={(e)=> setProjectType("development")}>Development</button>
            <button className={`portfolio-type-btn ${projectType === "web-design" ? "active-type" : null}`} onClick={(e)=> setProjectType("web-design")}>Web Design</button>
            <button className={`portfolio-type-btn ${projectType === "graphic-design" ? "active-type" : null}`} onClick={(e)=> setProjectType("graphic-design")}>Graphic Design</button>
          </div>
          
        <div className="container portfolio-wrap site-section">


          <div className="row mb-4">

            <LoadingPage isLoading={loading} />
            <ProjectList projects={projects} type={projectType} />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Portfolio;