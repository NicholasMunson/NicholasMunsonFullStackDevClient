import React, { Component } from "react"
import { FaBars, FaClose } from 'react-icons/fa';
import "../styles/navbar.css"
import ResponsiveMenu from 'react-responsive-navbar';

class Navbar extends Component {

    render() {
        return( 
            <ResponsiveMenu
                className="header-container"
                menuOpenButton={<FaBars size={30} color="MediumPurple" />}
                menuCloseButton={<FaClose size={30} color="MediumPurple" />}
                changeMenuOn="500px"
                largeMenuClassName="large-menu-classname"
                smallMenuClassName="small-menu-classname"
                menu={
                <div className="header-container">
                    <ul className="nav-container">
                        <li><a to="/" className="text a-text" href="#landing" >Home</a></li>
                        <li><a className="text a-text" href="#about-section">Bio</a> </li>
                        <li><a className="text a-text" href="#projects">Projects</a></li>
                        <li><a className="text a-text" href="#contact" >Contact</a></li>
                    </ul>
                </div>
                }
            />
                // <div className="header-container"> 
                //     <a to="/" className="title" ><img id="nm-logo" src={require("../images/ntmlogo1000.png")} alt="Nicholas Munson logo"/></a>
                //     <div className="menu"> 
                //         <div className="nav-container">
                //             <a className="text a-text" href="#about-section">Bio</a> 
                //             <a  className="text a-text" to="/Projects">Projects</a>
                //             <a  className="text a-text" to="/Contact" >Contact</a>   
                //         </div>
                //     </div>
                // </div>
        )
    }
} 


export default Navbar