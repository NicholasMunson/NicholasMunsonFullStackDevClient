import React from "react"
import '../styles/landing.css'

function Landing(props){
return(
    <div className="body">
        <div className="video-container">
            <video id="background-video" loop autoPlay>
                <source src={require("../videos/ntmdev.com_intro_video.mp4")}/>
            </video>
        </div>
    </div>

)
}

export default Landing 