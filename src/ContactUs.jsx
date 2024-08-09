import React from 'react';
import './ContactUs.css';
import Navbar1 from './Navbar1';
import Footer from './footer/Footer';
import Lastfooter from './lastfooter/Lastfooter';
const ContactUs = () => {
  return (
   <>    

   <Navbar1/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    <div className='aboutFooter'>   
  <Footer/>
  <Lastfooter/>
  </div>
    </>
  );
}

export default ContactUs;
