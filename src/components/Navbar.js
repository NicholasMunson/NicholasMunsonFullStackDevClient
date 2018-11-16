import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"
class Navbar extends Component {

    render() {
        return( 
                <div className="header-container"> 
                    <Link to="/" className="title" ><img id="nm-logo" src={require("../images/ntmlogo1000.png")} alt="Nicholas Munson logo"/></Link>
                    <div className="menu"> 
                        <div className="nav-container">
                            <a className="text a-text" href="#about-section">Bio</a> 
                            <Link  className="text a-text" to="/Projects">Projects</Link>
                            <Link  className="text a-text" to="/Contact" >Contact</Link>   
                        </div>
                    </div>
                </div>
        )
    }
} 


export default Navbar