import React from 'react'
// Logo Imports
import bash from "../skills_logos/Bash.png"
import python from "../skills_logos/Python.png"
import java from "../skills_logos/Java.png"
import javascript from "../skills_logos/Javascript.png"
import html from "../skills_logos/HTML.png"
import powershell from "../skills_logos/PowerShell.png"
import git from "../skills_logos/Git.png"
import sql from "../skills_logos/SQL.png"
import r from "../skills_logos/R.png"
// OwlCarousel Imports
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Skills = () => {
    
  return (
    <div id="skills" className="skills">
        <h1 className="py-5" style={{color: "orange"}}> Skills </h1>
        <p style={{color: "white"}}> (Click & Drag to Scroll) </p>
            <div className="container">

                <OwlCarousel className="owl-theme" loop items="4">
                    <div className="item">
                        <div className="icon-wrapper"> <img className="icon" src={python} alt="Python..."/> </div>
                        <h3 style={{color: "white", fontWeight: 100}}> Python </h3>
                        <h4 style={{color: "white", fontWeight: 100}}> (Proficient) </h4>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper"> <img className="icon" src={java} alt="Java..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> Java </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Proficient) </h4>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper"> <img className="icon" src={javascript} alt="Javascript..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> Javascript </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Proficient) </h4>
                    </div>
                    <div className="item">
                       <div className="icon-wrapper"> <img className="icon" src={html} alt="HTML..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> HTML/CSS </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Intermediate) </h4>
                    </div>
                    <div className="item">
                       <div className="icon-wrapper"> <img className="icon" src={sql} alt="SQl..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> SQL </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Intermediate) </h4>
                    </div>
                    <div className="item">
                       <div className="icon-wrapper"> <img className="icon" src={git} alt="Git..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> Git </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Intermediate) </h4>
                    </div>
                    <div className="item">
                        <div className="icon-wrapper"> <img className="icon" src={bash} alt="Bash..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> Bash </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Intermediate) </h4>
                    </div>
                    <div className="item">
                       <div className="icon-wrapper"> <img className="icon" src={powershell} alt="PowerShell..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> PowerShell </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Familiar) </h4>
                    </div>
                    <div className="item">
                       <div className="icon-wrapper"> <img className="icon" src={r} alt="R..."/> </div>
                            <h3 style={{color: "white", fontWeight: 100}}> R </h3>
                            <h4 style={{color: "white", fontWeight: 100}}> (Familiar) </h4>
                    </div>
                </OwlCarousel>

            </div>
    </div>
  )
}

export default Skills