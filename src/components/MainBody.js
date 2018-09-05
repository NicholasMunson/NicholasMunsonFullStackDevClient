import React, { Component } from 'react'
import About from "./About.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import Landing from "./Landing.js"



class MainBody extends Component{

    switch = () => {
        switch(this.props.display){
            case "A": return <About />
            case "B": return <Projects />
            case "C": return <Contact />
            default : return <Landing />
        }
    }

    render(){
        let displaySwitch = this.switch(this.props.display)
        return(
            <div>
                {displaySwitch}
            </div>
        )
    }
}

export default MainBody