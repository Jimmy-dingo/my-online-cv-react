import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    const project = projects.map(project => {
        console.log(project.name)

        // project.usedtech.map(tech => `${tech} `)

        const usedTechImages = project.usedtech.map(tech => {
                if(tech === "HTML") {
                    return <img className="tech" src="/assets/icons/html5-brands.svg" alt="tech-icon" />
                }
                if(tech === "CSS") {
                    return <img className="tech" src="/assets/icons/css3-alt-brands.svg" alt="tech-icon" />
                }
                if(tech === "Javascript") {
                    return <img className="tech" src="/assets/icons/js-brands.svg" alt="tech-icon" />
                }
                if(tech === "React") {
                    return <img className="tech" src="/assets/icons/react-brands.svg" alt="tech-icon" />
                }
                
        })

        return (
            <article className="portfolio-article col-sm-6 col-md-6 col-lg-4 mb-5">
                {/* <Link to={`/portfolio/${project.id}/`} className="portfolio-item"><img src={project.image} alt="Image" className="img-fluid" /></Link> */}
                <a href={`/portfolio/${project.id}/`} className="portfolio-item"><img src={project.image} alt="Image" className="img-fluid" /></a>
                <div className="proj-details">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank"><img className="icon-smedia" src="/assets/icons/gitHub.png" alt="gitHub-icon" /></a>
                    <p>Tecnologies used</p>
                    <div className="used-tech">{usedTechImages}</div>
                </div>
            </article>
        )
    })


    return (
        <>
            {project}
        </>
    )
}

export default ProjectList;