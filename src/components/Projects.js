import React, {Component} from "react"

// const API = url("../API/projects.json")


class Projects extends Component{
    constructor(props){
        super(props)
        this.state = ({
            data: "",
        })
    }

    componentDidMount(){
        const URL =   ("")
        // fetch(API)
        // .then(res => res.json())
        // .then((data) => {
        //     console.log('data:', data);
        //     })    
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