import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import '../styles/App.css';
import Navbar2 from './Navbar2.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Landing from './Landing.js'



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            construction: false
        }
    }


    render() {
        return (
            <Router>
                <div className="App">
                    {/* <Navbar2 />
                    <Landing />
                    <About />
                    <Projects /> */}
                    <Contact />
                </div>
            </Router>
        );

    }
}

export default App;
