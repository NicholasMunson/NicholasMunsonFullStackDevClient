import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return(
            <Router>    
                <div className="header-container"> 
                    <Link to="/" className="title">Nicholas Munson</Link>
                    <div className="nav-container"> 
                        <Link to="/About"> About</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                </div>
            </Router> 
        )
    }
}


export default Navbar