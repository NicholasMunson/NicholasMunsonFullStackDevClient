import React from 'react';
import ProjectCard from "./ProjectCard.js"

const ProjectDataCardContainer = (props) => {
    let projectCards = props.currentState.map(project => <ProjectCard projects={project}  key={project.id} />)

    return (
        <div className="card-container">
            {projectCards}          
        </div>
    );
};

export default ProjectDataCardContainer;