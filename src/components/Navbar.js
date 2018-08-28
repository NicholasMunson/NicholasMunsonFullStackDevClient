import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import "../styles/navbar.css"
class Navbar extends Component {
    render() {
        return(
            <Router>    
                <div className="header-container"> 
                    <Link to="/" className="title, text">Nicholas Munson</Link>
                    <div className="menu"> 
                        <div className="nav-container">
                            <Link  className="text" to="/About" component={About}> About</Link>
                            <Link  className="text" to="/Projects" component={Projects}>Projects</Link>
                            <Link  className="text" to="/Contact" component={Contact}>Contact</Link>
                        </div>
                    </div>
                </div>
            </Router> 
        )
    }
}


export default Navbar