import React,{ useState } from 'react';
import emailjs from '@emailjs/browser';
import image  from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/Screen Shot 2022-03-04 at 6.18.24 PM.png'
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/Contact.css'
import Fade from 'react-reveal/Fade';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_29hzpfr", "template_qd4z5jp", e.target , "6p-27GoyQ2C9g4y67")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });  
      
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      alert('Submitted Thanks!!')
    
  };

  return(
    <div>
      <Fade right>
          <div className="contact-info">
            <h2>LET'S CHAT!</h2>
          </div>
      </Fade>
      <div className="container d-flex justify-content-center" style={{marginBottom:'30px'}}>
        <Fade left>
          <img src={image} height="440px" width="480px" alt="" className="contact-image"/>
        </Fade>
      </div>

      <div className="form-container">
        <h2 style={{textAlign:'center'}}>Don't Be Shy! Send Me A Message!</h2>
        <form onSubmit={sendEmail} className="form-email">
          <div class=" col-8 form-group pt-2 mx-auto">
            <label>Name</label>
            <input 
            type="text" 
            class="form-control" 
            placeholder="Luke Skywalker" 
            name="name" 
            onChange={e=> setName(e.target.value)}
            value={name}
            />
          </div>
          <div class=" col-8 form-group pt-2 mx-auto">
            <label>Email Address</label>
            <input 
            type="email" 
            class="form-control" 
            placeholder="yipeekyaya@important.com" 
            name="email" 
            onChange={e=> setEmail(e.target.value)}
            value={email}
            />
          </div>
          <div class=" col-8 form-group pt-2 mx-auto">
            <label>Subject</label>
            <input 
            type="text" 
            class="form-control" 
            placeholder="Answer or Else!" 
            name="subject"
            onChange={e=> setSubject(e.target.value)}
            value={subject}
            />
          </div>
          <div class="col-8 form-group pt-2 mx-auto">
            <label>Message</label>
            <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="I will look at your growth with great interest!" 
            name="message"
            onChange={e=> setMessage(e.target.value)} 
            value={message}
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto d-flex justify-content-center">
            <input 
            type="submit" 
            className="btn btn-info" 
            style={{backgroundColor:'#007BFF'}}
            value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};


