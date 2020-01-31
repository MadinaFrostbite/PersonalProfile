import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Me"
          dark={true}
          
          id="aboutMe"
        />
        <Section
          title="Skill"
          dark={false}
          id="skill"
        />
        <Section
          title="Education"
          dark={true}
          id="education"
        />
        <Section
          title="Service"
          dark={false}
          id="service"
        />
        <Section
          title="Portfolio"
          dark={true}
          id="portfolio"
        />
        <Section
          title="Contact"
          dark={false}
          id="contact"
        />
      </div>
    );
  }
}

export default App;
