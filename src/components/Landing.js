import React from "react"
import '../styles/landing.css'

function Landing(props){
return(
    <div className="body" id="landing">
        <div className="media-container">
            <video className="background-and-border" loop autoPlay>
                <source src={require("https://drive.google.com/file/d/1WwgHqF1rgtct-0xUBfOfqADXCokAgKgz/view?usp=sharing")}/>
            </video>
        </div>
    </div>

)
}

export default Landing 