import React, { Component } from "react"
import "../styles/construction.css"

import "../styles/navbar.css"
function Construction(props){
        return( 
            <div className="construction-container" id="contact">
                {/* <div className="top-imgs">
                    <img  id="self" src={require("../images/self-img-no-background.png")} alt="nicholas munson" />
                    <img  id="speech-bubble" src={require("../images/constructionMessage.png")} alt="speech bubble" />
                </div> */}
                <div className="icon-cluster">
                    <section>
                        <figure>
                            <a href="https://github.com/NicholasMunson" rel="noopener noreferrer" target="_blank">
                                <img className="icon" src={require("../images/github.png")} alt="github icon" />
                            </a>
                            <figcaption className="construction-text">Github</figcaption>
                        </figure>
                        <figure>
                            <a href="https://www.linkedin.com/in/nicholastmunson/" rel="noopener noreferrer" target="_blank">
                                <img className="icon"  src={require("../images/linkedin.png")} alt="linked in icon" />
                            </a>
                            <figcaption className="construction-text">LinkedIn</figcaption>
                        </figure>
                    </section>
                    <section>    
                        <figure>
                            <a href="mailto:Nicholas.T.Munson@gmail.com" rel="noopener noreferrer" target="_blank">
                                <img className="icon"  src={require("../images/gmail.png")} alt="G mail icon" />
                            </a>
                            <figcaption className="construction-text">Gmail</figcaption>
                        </figure>
                        <figure>
                            <a href="https://drive.google.com/file/d/1RlxJNajWk6uYevxs_fEDO0wHEvQh4YNg/view?usp=sharing" download rel="noopener noreferrer" target="_blank">
                                <img className="icon"  src={require("../images/resume.png")} alt="Resume Icon" />
                            </a>
                            <figcaption className="construction-text">Resume</figcaption>
                        </figure>
                    </section>
                </div>
            </div>
        )
    }


export default Construction