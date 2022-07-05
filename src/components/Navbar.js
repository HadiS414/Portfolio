import React from "react";
import logo from "../h-logo.png";
import {Link} from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faNavicon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  return (
    <div id="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">           
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt=""/> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={false} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link smooth={false} to="aboutme" offset={-110} className="nav-link" href="#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={false} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={false} to="skills" offset={-110} className="nav-link" href="#">Skills</Link>
              </li>
              <li className="nav-item">
                <Link smooth={false} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={false} to="contact" offset={-110} className="nav-link" href="#">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    </div>
  )
}

export default Navbar