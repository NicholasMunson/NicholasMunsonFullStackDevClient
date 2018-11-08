import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../styles/App.css';
import Navbar from './Navbar.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Landing from './Landing.js'
// import Construction from './Construction.js'

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
                    <Navbar />
                    <Landing />
                    <About />
                    <Projects />
                    <Contact />
                    {/* <Route exact path="/Bio" component={About}/>
                    <Route path="/Projects" component={Projects}/>
                    <Route path="/Contact" component={Contact}/> */}
                </div>
            </Router>
        );
        
    }
}

export default App;
