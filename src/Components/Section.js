import React from "react";
import AboutMe from './Main/AboutMe';
import Skill from './Main/Skill';
import Education from './Main/Education';
import Service from './Main/Service';
import Portfolio from './Main/Portfolio';
import Contact from './Main/Contact';

export default function Section({ title, id }) {
  function addSection(id){
    console.log("in add section");

    switch(id){
      case 'aboutMe':
      return <AboutMe />;
       
      case 'skill':
        return <Skill/>;

      case 'education':
        return <Education/>;

      case 'service':
        return <Service/>;

      case 'portfolio':
        return <Portfolio/>;

      case 'contact':
        return <Contact/>;
      
      default:
        break;
    }
  }
  return (
    <div className={"section" }>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
          <div>
            {id.length > 0 ? addSection(id) : console.log("err")}
          </div>
      </div>
    </div>
  );
}
