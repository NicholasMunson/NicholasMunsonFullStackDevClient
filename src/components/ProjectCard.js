import React from 'react';
import '../styles/projectCard.css'


const ProjectCard = (props) => {
    let projects = props.projects
    const backendLink = !projects.linkBackend ? null : <p className="project-links"> <a href={projects.linkBackend}> Backend code here</a> </p>
    return (
        <div className="card">
            <div className="img-container">
                <img className="project-img" src={projects.img} alt="" />
                <h1>{projects.name}</h1>
            </div>
            <div className="sections-container">
                <section className="left-card-section"> 
                    <div className="project-name">
                        <h4>About {projects.name}</h4> 
                        <p className="project-description" >{projects.description}</p> 
                    </div>   
                    <p className="project-links"> <a href={projects.linkFrontend}>Check out my frontend code here </a></p> 
                </section>
                <section className="right-card-section"> 
                    <div>
                        <h4>Tech Used</h4>
                        <p className="project-tech">{projects.tech}</p> 
                    </div>     
                    {backendLink}
                </section>
            </div>
            
        </div>
    );
};

export default ProjectCard;