import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">

                <div className="copyright col">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp; Hadi Salameh
                </div>

                <div className="icons col">
                    <a href="https://github.com/HadiS414"> <FontAwesomeIcon className="social-icon" icon={faGithub} style={{color:"white"}}/> </a>
                    <a href="https://www.linkedin.com/in/hadi-salameh/"> <FontAwesomeIcon className="social-icon" icon={faLinkedin} style={{color:"white"}}/> </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer