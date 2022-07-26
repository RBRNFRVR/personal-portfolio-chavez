import React from 'react';
import image  from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Screen Shot 2022-03-04 at 6.18.24 PM.png'
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Contact.css'
import github from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/github-logo-2.png'
import linkedin from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/linkedin-logo-2.png'

export const Contact = () => {
  return(
      <div className='container d-flex justify-content-center mt-5'>
          <img src={image} height='440px' width='480px' alt='' className='contact-image'/>
          <div className='contact-info'>
            <h2>Come Find Me!</h2>
            <h5>Name: Joseph Chavez</h5>
            <h5>Email: rommelchavez99@gmail.com</h5>
            <a href='https://www.linkedin.com/in/joseph-chavez-1a0904152/' target='_blank' rel="noopener noreferrer"><img src={linkedin} height='55px' width='55px' alt=''/></a>
            <a href='https://github.com/RBRNFRVR' target='_blank' rel="noopener noreferrer"><img src={github} height='40px' width='40px' alt=''/></a>
          </div>
      </div>
  );
};


