import React from 'react';
import htmlPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/html-logo.png'
import cssPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/css-logo.png'
import jsPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/js-logo.png'
import rubyPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/ruby-logo.png'
import pythonPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/python-logo.png'
import reactPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-logo.png'
import routerPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-router-logo.png'
import railsPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/rails-logo.png'
import djangoPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/django-logo.png'
import jsonphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/json-logo.png'
import reduxphoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/redux_logo_2-24410881e63c96340db17ec232dfd1bf.png'
import Fade from 'react-reveal/Fade';

export const Languages = () => {
  return(
    <div className='language-file-container'> 
        <Fade bottom>
        <h1 className='container-title'>Known Languages</h1>
        <div className='language-container'>
          <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank' rel="noopener noreferrer"><img src={htmlPhoto} height="240px" width="240px" className="html-photo" alt=''/></a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel="noopener noreferrer"><img src={cssPhoto} height="240px" width="180px" className="css-photo" alt=''/></a>
          <a href='https://www.javascript.com/' target='_blank' rel="noopener noreferrer"><img src={jsPhoto} height="200px" width="200px" className='js-photo' alt=''/></a>
          <a href='https://www.ruby-lang.org/en/' target='_blank' rel="noopener noreferrer"><img src={rubyPhoto} height="250px" width="330px" className='ruby-photo' alt=''/></a>
          <a href='https://www.python.org/' target='_blank' rel="noopener noreferrer"><img src={pythonPhoto} height="200px" width="380px"  className="python-photo" alt=''/></a>
        </div>
        </Fade>
        <Fade bottom>
        <h1 className='container-title'>Known Frameworks and Dependencies</h1>
        <div className='frameworks-container'>
          <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer"><img src={reactPhoto}  height='180px' width='380px' alt=''/></a>
          <a href='https://reactrouter.com/docs/en/v6' target='_blank' rel="noopener noreferrer"><img src={routerPhoto} height='180px' width='360px' alt=''/></a>
          <a href='https://redux.js.org/introduction/getting-started' target='_blank' rel="noopener noreferrer"><img src={reduxphoto}  height='180px' width='360px' alt=''/></a>
          <a href='https://rubyonrails.org/' target='_blank' rel="noopener noreferrer"><img src={railsPhoto} height='180px' width='360px' alt=''/></a>
          <a href='https://www.djangoproject.com/' target='_blank' rel="noopener noreferrer"><img src={djangoPhoto} height='280px' width='380px' alt=''/></a>
          <a href='https://www.json.org/json-en.html' target='_blank' rel="noopener noreferrer"><img src={jsonphoto} height='180px' width='360px' alt=''/></a>
        </div>
        </Fade>
    </div>
  )
};
