import React from "react"
import '../styles/landing.css'
const URL = "https://vimeo.com/303836781"

function Landing(props){
return(
    <div className="body" id="landing">
        <div className="media-container">
            <video className="background-and-border" loop autoPlay controls>
                <source src={URL}/>
            </video>
        </div>
    </div>

)
}

export default Landing 