import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"
class Navbar extends Component {

    render() {
        return( 
                <div className="header-container"> 
                    <Link to="/" className="title, text">Nicholas Munson</Link>
                    <div className="menu"> 
                        <div className="nav-container">
                            <Link  className="text" to="/Bio">Bio</Link>
                            <Link  className="text" to="/Projects">Projects</Link>
                            <Link  className="text" to="/Contact" >Contact</Link>   
                        </div>
                    </div>
                </div>
        )
    }
} 


export default Navbar