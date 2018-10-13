import React, {Component} from "react"
const URL = "https://api.myjson.com/bins/5z7k0"



class Projects extends Component{
    constructor(props){
        super(props)
        this.state = ({
            data: "",
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
        console.log(this.state)
        return(
            <div className="body">
                <p>Hello from the Projects section</p>
            </div>
        )
    }
}

export default Projects 