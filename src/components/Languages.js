import React from 'react';
import htmlphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/html-logo.png'
import cssphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/css-logo.png'
import jsphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/js-logo.png'
import rubyphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/ruby-logo.png'
import pythonphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/python-logo.png'
import reactphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-logo.png'
import routerphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-router-logo.png'
import railsphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/rails-logo.png'
import djangophoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/django-logo-1.png'
import jsonphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/json-logo.png'
import reduxphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/redux-logo-landscape.png'
import Fade from 'react-reveal/Fade';

export const Languages = () => {
  return(
    <div className='language-file-container'> 
        <Fade bottom>
        <h1 className='container-title'>Known Languages</h1>
        <div className='language-container'>
          <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank' rel="noopener noreferrer"><img src={htmlphoto} height="240px" width="240px" alt=''/></a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel="noopener noreferrer"><img src={cssphoto} height="240px" width="180px" alt=''/></a>
          <a href='https://www.javascript.com/' target='_blank' rel="noopener noreferrer"><img src={jsphoto} height="200px" width="200px" className='js-photo' alt=''/></a>
          <a href='https://www.ruby-lang.org/en/' target='_blank' rel="noopener noreferrer"><img src={rubyphoto} height="250px" width="330px" alt=''/></a>
          <a href='https://www.python.org/' target='_blank' rel="noopener noreferrer"><img src={pythonphoto} height="200px" width="380px" alt=''/></a>
        </div>
        </Fade>
        <Fade bottom>
        <h1 className='container-title'>Known Frameworks and Dependencies</h1>
        <div className='frameworks-container'>
          <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer"><img src={reactphoto}  height='180px' width='380px' alt=''/></a>
          <a href='https://reactrouter.com/docs/en/v6' target='_blank' rel="noopener noreferrer"><img src={routerphoto} height='180px' width='360px' alt=''/></a>
          <a href='https://redux.js.org/introduction/getting-started' target='_blank' rel="noopener noreferrer"><img src={reduxphoto}  height='200px' width='360px' alt=''/></a>
          <a href='https://rubyonrails.org/' target='_blank' rel="noopener noreferrer"><img src={railsphoto} height='180px' width='360px' alt=''/></a>
          <a href='https://www.djangoproject.com/' target='_blank' rel="noopener noreferrer"><img src={djangophoto} height='180px' width='360px' alt=''/></a>
          <a href='https://www.json.org/json-en.html' target='_blank' rel="noopener noreferrer"><img src={jsonphoto} height='180px' width='360px' alt=''/></a>
        </div>
        </Fade>
    </div>
  )
};
