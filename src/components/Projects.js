import React, {Component} from "react"
import ProjectDataCard from "./ProjectDataCard";
const URL = "https://api.myjson.com/bins/5z7k0"



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
            data: data
        })
    
    }


    render(){
        let currentState = this.state.data
        return(
            <div className="body">
                <ProjectDataCard currentState={currentState} />
            </div>
        )
    }
}

export default Projects 