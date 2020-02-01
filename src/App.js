import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from './Components/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Section
        id="aboutMe"
        />
        <Section
          dark={false}
          id="skill"
        />
        <Section
          title="Education"
          
          id="education"
        />
        <Section
          title="Service"
          
          id="service"
        />
        <Section
          title="Portfolio"
          
          id="portfolio"
        />
        <Section
          title="Contact"
         
          id="contact"
        />
        
       
        <Footer/>
      </div>
    );
  }
}

export default App;
