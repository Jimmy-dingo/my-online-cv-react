import React, {useState, useEffect} from 'react';
import './Portfolio.css';
import ProjectList from './ProjectList';
import projectsJSON from './portfolio.json';
import LoadingPage from './LoadingPage';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = () => {
          setLoading(true);
          const projectList = projectsJSON;
          setProjects(projectList);
          setLoading(false);
        }
        
        fetchProjects();
    }, []);

    return (
        <section className="Portfolio container-fluid">
            <div className="container">
                <div className="section-title">
                    <h1>Portfolio</h1>
                    <h2>An overview of my projects</h2>
                </div>
                <div class="container portfolio-wrap site-section">

                    <div class="row mb-4">

                       <LoadingPage isLoading={loading} />
                       <ProjectList projects={projects}/>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;