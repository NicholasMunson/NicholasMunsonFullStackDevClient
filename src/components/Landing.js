import React from "react"
import '../styles/landing.css'
// const URL = "https://drive.google.com/file/d/1WwgHqF1rgtct-0xUBfOfqADXCokAgKgz/view?usp=sharing"
// const intro = "../videos/ntmdev.com_intro_video.mp4"

function Landing(props){
return(
    <div className="body" id="landing">
        <div className="media-container">
            <video className="background-and-border" loop autoPlay >
                <source src={require("../videos/ntmdev.com_intro_video.mp4")} type="video/mp4" />
            </video>
        </div>
    </div>

)
}

export default Landing 