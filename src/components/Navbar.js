import React, { Component } from "react"
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import "../styles/navbar.css"
import ResponsiveMenu from 'react-responsive-navbar';

class Navbar extends Component {

    render() {
        return( 
            <div className="header-container">
                <ResponsiveMenu            
                    menuOpenButton={<FaBars size={30} color="#BDD990" />}
                    menuCloseButton={<FaRegWindowClose size={30} color="#BDD990" />}
                    changeMenuOn="425px"
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                
                        <ul className="nav-container">
                            <li><a className="text a-text" href="#landing" >Home</a></li>
                            <li><a className="text a-text" href="#about-section">Bio</a> </li>
                            <li><a className="text a-text" href="#projects">Projects</a></li>
                            <li><a className="text a-text" href="#contact" >Contact</a></li>
                        </ul>
                    }
                />
            </div>
        )
    }
} 


export default Navbar