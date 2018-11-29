import React from "react"
import '../styles/contact.css'

function Contact(props){
    return( 
        <div className="construction-container" id="contact">
            <div className="titles">
                <h1 className='title'>Contact Me</h1>
                <p>Thank you for visiting NTMDev.com. Below are a few ways to contact me the best is by Gmail or LinkedIn.  </p>
            </div>
            <div className="icon-cluster media-container">
                <section>
                    <figure>
                        <a href="https://github.com/NicholasMunson"  rel="noopener noreferrer"  target="_blank">
                            <img className="icon" src={require("../images/github.png")} alt="github icon" />
                        </a>
                        <figcaption className="construction-text">Github</figcaption>
                    </figure>
                    <figure>
                        <a href="https://www.linkedin.com/in/nicholastmunson/"  rel="noopener noreferrer"  target="_blank">
                            <img className="icon"  src={require("../images/linkedin.png")} alt="linked in icon" />
                        </a>
                        <figcaption className="construction-text">LinkedIn</figcaption>
                    </figure>
                </section>
                <section>    
                    <figure>
                        <a href="mailto:Nicholas.T.Munson@gmail.com"  rel="noopener noreferrer"  target="_blank">
                            <img className="icon"  src={require("../images/gmail.png")} alt="G mail icon" />
                        </a>
                        <figcaption className="construction-text">Gmail</figcaption>
                    </figure>
                    <figure>
                        <a href="https://drive.google.com/file/d/1gdkTz1ADv9teX5VF0_yRqNi4xIlSgyjQ/view?usp=sharing" download  rel="noopener noreferrer"  target="_blank">
                            <img className="icon"  src={require("../images/resume.png")} alt="Resume Icon" />
                        </a>
                        <figcaption className="construction-text">Resume</figcaption>
                    </figure>
                </section>
            </div>
        </div>
    )
}

export default Contact 