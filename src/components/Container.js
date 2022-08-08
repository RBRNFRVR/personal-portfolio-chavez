import React from 'react';
import { Languages } from './Languages';
import github from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/github-logo-2.png'
import linkedin from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/icone-linkedin-ronde-noire.png'
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Container.css'



export const Container = () => {
    return (
        <div className="homepage-container">
            <div className="container d-flex flex-column flex-md-row justify-content-center mt-5 pt-5" >
                <div className="picture-container">
                     <img src={require("../images/profile-image.jpeg")} height="320px" className="main-page-image" alt=""/>
                </div>
                <div className="intro-container">
                    <h1>Hey! I am Joseph!</h1>
                    <h4>Web Developer</h4>
                    <p>Always learning how to create and update quality work. </p>
                    <a href="https://www.linkedin.com/in/joseph-chavez-1a0904152/" target="_blank" rel="noopener noreferrer"><img src={linkedin} height="55px" width="55px" alt="" style={{margin:'3px'}} /></a>
                    <a href="https://github.com/RBRNFRVR" target="_blank" rel="noopener noreferrer"><img src={github} height="48px" width="48px" alt="" style={{margin:'3px'}} /></a>
                </div>
            </div>
            <div>
                 <Languages />
            </div>
        </div>
    )
}
