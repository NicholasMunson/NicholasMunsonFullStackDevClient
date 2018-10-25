import React from 'react';
import '../styles/projectCard.css'


const ProjectCard = (props) => {
    let projects = props.projects
    console.log()
    return (
        <div className="card">
            <div className="img-container">
                <img className="project-img" src={projects.img} alt="" />
                <h1>{projects.name}</h1>
            </div>
            <div className="sections-container">
                <section className="left-card-section">  
                    <p className="project-description" >{projects.description}</p>    
                    <p className="project-links"> <a href={projects.linkFrontend}>Check out my frontend code here </a></p> 
                </section>
                <section className="right-card-section"> 
                    <p className="project-tech">{projects.tech}</p>      
                    <p className="project-links"> <a href={projects.linkBackend}> Backend code here</a> </p>
                </section>
            </div>
            
        </div>
    );
};

export default ProjectCard;