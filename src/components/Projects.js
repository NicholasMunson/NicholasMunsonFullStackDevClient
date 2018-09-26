import React, {Component} from "react"
import "../styles/projects.css"

class Projects extends Component{
    projectData = () => {
        fetch("../API/projects.json")
        .then(response => response.json())
        .then(console.log)
    }


    render(){
        return(
            <div className="body">
                <p>Hello from the Projects section</p>
            </div>
        )
    }
}

export default Projects 