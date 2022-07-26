import React from 'react';
import { Languages } from './Languages';
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Container.css'



export const Container = () => {
    return (
        <div className='homepage-container'>
            <div className='container d-flex justify-content-center mt-5' >
                <div className='picture-container'>
                     <img src={require("../images/profile-image.jpeg")} height="320px" className='main-page-image' alt=''/>
                </div>
                <div className='intro-container'>
                     <h1>Hey! I am Joseph!</h1>
                    <h4>Web Developer</h4>
                     <p>Always learning how to create and update quality work. </p>
                </div>
            </div>
            <div>
                 <Languages />
            </div>
        </div>
    )
}
