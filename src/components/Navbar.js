import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "../styles/navbar.css"
import About from "./About.js"
class Navbar extends Component {

    render() {
        const displaySwitch = this.props.displaySwitch
        return(
            <Router>    
                <div className="header-container"> 
                    <Link to="/" className="title, text">Nicholas Munson</Link>
                    <div className="menu"> 
                        <div className="nav-container">
                            <Link  className="text" to="/About">About</Link>
                            <Link  className="text" to="/Projects">Projects</Link>
                            <Link  className="text" to="/Contact" >Contact</Link>
                        </div>
                    </div>
                </div>
            </Router> 
        )
    }
} 


export default Navbar