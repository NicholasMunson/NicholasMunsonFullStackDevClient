import React, { Component } from 'react'
import './App.css';
import Navbar from '../src/components/Navbar.js'
import MainBody from '../src/components/MainBody.js'

class App extends Component {
  constructor(props){
    super(props)
    this.setState=({
      display:"",
    
    })
  }

  handleSwitch = () => {
  
  }


  render() {
    let display = this.props.display
    return (
      <div className="App"> 
      <Navbar handleSwitch={this.handleSwitch}  />
      {/* <MainBody handleSwitch={this.handleSwitch} display={display} /> */}
      </div>
    );
  }
}

export default App;
