import React, {Component } from "react"
import ProjectDataCardContainer from "./ProjectDataCardContainer";
const URL = "https://api.myjson.com/bins/bt7qo"



class Projects extends Component{
    constructor(props){
        super(props)
        this.state = ({
            data:[],
        })
    }

    async componentDidMount(){
        const res = await fetch(URL)
        const data = await res.json()
        await this.setState({
            data: data.projects
        })
    
    }


    render(){
        let currentState = this.state.data
        return(             
            <div className="body" id="projects">
                <img className="hero-image media-container" src={require("../images/codeCompiled.jpg")} alt="computer with headphones" />              
                <h1 className='title'>Projects</h1>
                    <ProjectDataCardContainer currentState={currentState} />
            </div>
        )
    }
}

export default Projects 