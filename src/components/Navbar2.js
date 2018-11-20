import React, { Component } from "react"
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import "../styles/navbar.css"
import ResponsiveMenu from 'react-responsive-navbar';


class Navbar extends Component {

    render() {
        return( 
        <div>
            <ResponsiveMenu
                menuOpenButton={<FaBars size={30} color="#BDD990" />}
                menuCloseButton={<FaRegWindowClose size={30} color="#BDD990" />}
                changeMenuOn="500px"
                largeMenuClassName="large-menu"
                smallMenuClassName="small-menu"
                menu={
                    <div className="Navbar">
                        <div className="ntmdev-container">
                            <p className="ntmdev-logo" >NTMDev.com</p>
                        </div>
                        <ul className="nav-container">
                                <li>
                                    <a className="text a-text" href="#landing" >Home</a>
                                </li>
                                <li>
                                    <a className="text a-text" href="#about-section">Bio</a> 
                                </li>
                                <li>
                                    <a className="text a-text" href="#projects">Projects</a>
                                </li>
                                <li>
                                    <a className="text a-text" href="#contact" >Contact</a>
                                </li>
                        </ul>
                    </div>
                }
            />  
        </div>
        )
    }
} 


export default Navbar