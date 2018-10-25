import React from 'react';
import '../styles/projectCard.css'


const ProjectCard = (props) => {
    let projects = props.projects
    return (
        <div className="card">
            <div className="img-container">
                <img src={projects.img} />
            </div>
            <section className="left-card-section">
                <h1>{projects.name}</h1>
                <h3> <a href={projects.linkFrontend}>Check out my frontend code here </a></h3>
                <h3> <a href={projects.linkBackend}> Backend code here</a> </h3>
            </section>
            <section>
                <p>{projects.description}</p>

            </section>
            
        </div>
    );
};

export default ProjectCard;