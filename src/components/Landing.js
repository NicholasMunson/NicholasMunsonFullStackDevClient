import React from "react"
import '../styles/landing.css'

function Landing(props){
return(
    <div className="body" id="landing">
        <div className="media-container">
            <video className="background-and-border" loop autoPlay controls >
                <source src={require("../videos/ntmdev.com_intro_video.mp4")} type="video/mp4" />
            </video>
        </div>
    </div>

)
}

export default Landing 