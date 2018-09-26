import React, { Component } from "react"
import "../styles/construction.css"

import "../styles/navbar.css"
function Construction(props){
        return( 
            <div className="construction-container">
            <img  id="self" src={require("../images/self-img-no-background.png")} alt="nicholas munson" />
            <p className="construction-text">Thank you for visiting NTMDev.com I am currently building, modifying, or updating. Please follow the links below to see me work on github, connect on LinkedIn, email me, or download my resume.  </p>
            <section>
                <figure>
                    <a href="https://github.com/NicholasMunson" target="_blank">
                        <img src={require("../images/github.png")} alt="github icon" />
                    </a>
                    <figcaption className="construction-text">Github</figcaption>
                </figure>
                <figure>
                    <a href="https://www.linkedin.com/in/nicholastmunson/" target="_blank">
                        <img src={require("../images/linkedin.png")} alt="linked in icon" />
                    </a>
                    <figcaption className="construction-text">LinkedIn</figcaption>
                </figure>
                <figure>
                    <a href="mailto:Nicholas.T.Munson@gmail.com"target="_blank">
                        <img src={require("../images/gmail.png")} alt="G mail icon" />
                    </a>
                    <figcaption className="construction-text">Gmail</figcaption>
                </figure>
                <figure>
                    <a href="https://drive.google.com/file/d/1ABBkmt4tpUYFlCQA-kRVm1tTN_yAXAZp/view?usp=sharing" download target="_blank">
                        <img src={require("../images/resume.png")} alt="Resume Icon" />
                    </a>
                    <figcaption className="construction-text">Resume</figcaption>
                </figure>
            </section>
            <p className="construction-text" id="thankyou">Thank you!</p>
            </div>
        )
    }


export default Construction