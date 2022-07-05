import React from "react";
import author from "../about-me-pic.jpg";

const AboutMe = () => {

  return (
    <div id="aboutme" className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..." />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading"> ABOUT ME </h1>
                <p>
                My name is Hadi Salameh, a recent graduate of Stony Brook University with a B.S. in Information Systems and Applied Mathematics and Statistics. 
                I have over four years of programming experience in data structures, project design, and more. 
                I am familiar with several languages including Python, Java, Javascript, HTML/CSS, Bash, SQl, and have implemented 
                frameworks such as React, Tkinter, and more. I am currently seeking a full-time entry-level software engineer 
                position.
                </p>
                <p>
                A dream of mine is to collaborate with this generation's pioneers in pursuit of chasing after a greater purpose. 
                Leaving an impact and revolutionizing the industry has always pushed me to achieve perfection. My objective is 
                to work with a team of motivated individuals to maintain a revenue-generating project that has groundbreaking potential. I take pride in 
                building team-based relationships with other developers and discussing how to maximize our work's potential.    
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe