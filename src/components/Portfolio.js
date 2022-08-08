import React from 'react';
import Fade from 'react-reveal/Fade';
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Portfolio.css'
import musicApp from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Screen Shot 2022-07-22 at 8.05.26 PM.png'
import travelApp from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Screen Shot 2022-07-23 at 12.10.25 AM.png'
import reactPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-logo.png'
import rubyPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/rails-logo.png'
import routerPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/react-router-logo.png'
import deezerPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Deezer-logo.png'
import materialPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/1_Smbj_VLH7JRp9GhLaKyiUQ.png'
import googlePhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/GoogleMapsLogo.png'
import travelApiPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/logotravel.png'
import cryptoApp from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Screen Shot 2022-07-23 at 1.13.02 AM.png'
import antPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png'
import coinPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/coinranking-logo.png'
import bingPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Bing_General_Teal_rgb.png'
import reduxPhoto from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/redux_logo_2-24410881e63c96340db17ec232dfd1bf.png'

export const Portfolio = () => {

  return(
    <div className="portfolio-body" >
      {/* Music App Card */}
      <Fade right>
        <div className="card m-4 p-5" >
          <div className="row">
            <img className="card-img-top" src={musicApp} alt=""style={{height:'100%', width:'100%'}}/>
            <div className='used-container' style={{marginLeft:'40px'}}>
              <h1>Stack</h1>
              <ul>
                <li>
                  <img src={reactPhoto}  alt='' style={{width:'120px', height:'40px'}}/>
                </li>
                <li>
                  <img src={rubyPhoto}  alt='' style={{width:'120px', height:'30x'}}/>
                </li>
                <li>
                  <img src={routerPhoto}  alt='' style={{width:'130px', height:'30x'}}/>
                </li>
              </ul>
              <h1>API</h1>
              <ul>
                <li>
                  <img src={deezerPhoto}  alt='' style={{width:'150px', height:'50x'}}/>
                </li>
              </ul>
            </div>  
          </div>  
          <div className="card-body">
            <h5 className="card-title">The Playmaker</h5>
              <p className="card-text" style={{width:'90%'}}>
                My first ever solo project after first learning React. I was fascinated with music so I 
                decided to create a music playlist maker. Creativity was very crude because of a lot of
                my effort went into learning the nuances of what it takes to creating a React project. 
                This was also a fullstack project. The backend was built with a Ruby on Rails rest API with
                full CRUD methods to manage every users personal playlist with even some audio clips.
                A user authentication feature was also added using only state and React Router.
              </p>
              <a 
                href="https://github.com/RBRNFRVR/musicapp-client" 
                target="_blank"  
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{margin:'5px'}}
              >
                Go to Frontend Code
              </a>
              <a 
                href="https://github.com/RBRNFRVR/Backend-Test" 
                target="_blank"  
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{margin:'5px'}}
              >
                Go to Backend Code
              </a>
          </div>
        </div>
      </Fade>
      {/* Travel App */}
      <Fade left>
        <div className="card m-4 p-5" >
          <div className="row">
            <img className="card-img-top" src={travelApp} alt=""style={{height:'100%', width: '100%'}}/>
            <div className='used-container' style={{marginLeft:'40px'}}>
              <h1>Stack</h1>
              <ul>
                <li>
                  <img src={reactPhoto}  alt='' style={{width:'120px', height:'40px'}}/>
                </li>
                <li>
                  <img src={materialPhoto}  alt='' style={{width:'180px', height:'90px'}}/>
                </li>
              </ul>
              <h1>API</h1>
              <ul>
                <li>
                  <img src={googlePhoto}  alt='' style={{width:'200px', height:'80px'}}/>
                </li>
                <li>
                  <img src={travelApiPhoto}  alt='' style={{width:'180px', height:'55px'}}/>
                </li>
              </ul>
            </div>  
          </div>  
          <div className="card-body">
            <h5 className="card-title">The Travel App</h5>
              <p className="card-text" style={{width:'90%'}}>
                This was a fun app to make and first time using a css dependency to design my
                whole application. I used some styled components as well to make sure everything
                came together smoothly. Overall I found trying to between the Google Api and
                the Travel Advisor Api the most challenging. But was able to pull it off thanks
                to Travel Advisor Api provides the coordinates of each location so we can pass to
                the Google Maps Api and display the location for the user.
              </p>
              <a 
                href="https://github.com/RBRNFRVR/travel-app-practice/tree/main" 
                target="_blank"  
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{margin:'5px'}}
              >
                Go to Frontend Code
              </a>
          </div>
        </div>
      </Fade>
      {/* Crypto App */}
      <Fade right>
        <div className="card m-4 p-5" >
          <div className="row">
            <img className="card-img-top" src={cryptoApp} alt=""style={{height:'100%', width: '100%'}}/>
            <div className='used-container' style={{marginLeft:'40px'}}>
              <h1>Stack</h1>
              <ul>
                <li>
                  <img src={reactPhoto}  alt='' style={{width:'120px', height:'40px'}}/>
                </li>
                <li>
                  <img src={antPhoto}  alt='' style={{width:'130px', height:'130px'}}/>
                </li>
                <li>
                  <img src={reduxPhoto}  alt='' style={{width:'100px', height:'45px'}}/>
                </li>
              </ul>
              <h1>API</h1>
              <ul>
                <li>
                  <img src={coinPhoto}  alt='' style={{width:'145px', height:'32px', margin:'5px'}}/>
                </li>
                <li>
                  <img src={bingPhoto}  alt='' style={{width:'90', height:'32px', margin:'5px'}}/>
                </li>
              </ul>
            </div>  
          </div>  
          <div className="card-body mb-2">
            <h5 className="card-title">CryptoMania</h5>
              <p className="card-text" style={{width:'90%'}}>
                I just started investigating on crypto currencies and how they work especially
                with todays tech. So this project was great and more of a a crash course on the
                different cryptocurrency that exist today. First time ever using Redux on a project
                and I have to say I am quite impressed with could be done. Component based state
                is still quite good but having a global state for things such as an API helps out
                and reduces the need to pass props just by introducing some boiler plate code.

              </p>
              <a 
                href="https://github.com/RBRNFRVR/cryptoapp" 
                target="_blank"  
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{margin:'5px'}}
              >
                Go to Frontend Code
              </a>
          </div>
        </div>
      </Fade>
    </div>  
  );
};