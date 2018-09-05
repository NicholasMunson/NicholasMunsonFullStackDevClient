import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from '../src/components/Navbar.js'
import About from '../src/components/About.js'
import Projects from '../src/components/Projects.js'
import Contact from '../src/components/Contact.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: ""
        }
    }

    handleDisplaySwitch = (change) => {
        this.setState({display: `${change}`})

    }

    render() {
        let display = this.state.display
        let displaySwitch = this.handleDisplaySwitch
        return (
            <Router>
              <div className="App">
                  <Route path="/" component={Navbar}/>
                  <Route path="/About" component={About}/>
                  <Route path="/Projects" component={Projects}/>
                  <Route path="/Contact" component={Contact}/>
              </div>
            </Router>
        );
    }
}

export default App;
