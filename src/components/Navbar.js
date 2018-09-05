import React, { Component } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "../styles/navbar.css"
import About from "./About.js"
class Navbar extends Component {

    render() {
        const displaySwitch = this.props.displaySwitch
        return(
            <Router>    
                <div className="header-container"> 
                    <Link to="/" className="title, text" onClick={()=>{displaySwitch("")}} >Nicholas Munson</Link>
                    <div className="menu"> 
                        <div className="nav-container">
                            <Link  className="text" to="/About" onClick={()=>{displaySwitch("A")}}>About</Link>
                            <Link  className="text" to="/Projects" onClick={()=>{displaySwitch("B")}}>Projects</Link>
                            <Link  className="text" to="/Contact" onClick={()=>{displaySwitch("C")}} >Contact</Link>

                        </div>
                    </div>
                </div>
            </Router> 
        )
    }
} 


export default Navbar