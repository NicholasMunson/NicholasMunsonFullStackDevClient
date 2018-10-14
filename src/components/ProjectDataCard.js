import React from 'react';

const ProjectDataCard = (props) => {
    const cardData = (data) => {
        console.log("data", data)
    }
    projects ? cardData(projects): "Fetching Data"
    let projects = props.currentState.projects
    

    return (
        <div className="card-container">
            <section className="card">
                <div></div>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default ProjectDataCard;