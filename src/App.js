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
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Skill"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Education"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Service"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Portfolio"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={false}
          id="section6"
        />
      </div>
    );
  }
}

export default App;
