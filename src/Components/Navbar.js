import React, { Component } from "react";
//import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="nav-logo" onClick={this.scrollToTop}> Madina </div>
            <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
