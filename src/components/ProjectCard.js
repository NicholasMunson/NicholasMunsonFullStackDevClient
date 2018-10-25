import React from 'react';
import '../styles/projectCard.css'


const ProjectCard = (props) => {
    let projects = props.projects
    return (
        <div className="card">
            <div className="img-container">
                <img className="project-img" src={projects.img} alt="" />
                <h1>{projects.name}</h1>
            </div>
            <div className="sections-container">
                <section className="left-card-section">
                    
                    <h3> <a href={projects.linkFrontend}>Check out my frontend code here </a></h3>
                    <h3> <a href={projects.linkBackend}> Backend code here</a> </h3>
                </section>
                <section className="right-card-section">
                    <p>{projects.description}</p>
                    <p>{projects.tech}</p>
                </section>
            </div>
            
        </div>
    );
};

export default ProjectCard;