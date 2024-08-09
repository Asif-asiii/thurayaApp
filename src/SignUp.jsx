import React from 'react';
import './SignUp.css';
import Navbar1 from './Navbar1';
import Footer from './footer/Footer';
import Lastfooter from './lastfooter/Lastfooter';
const SignUp = () => {
  return (
    <>   
    <Navbar1/> 
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
    <div className='aboutFooter'>   
    <Footer/>
    <Lastfooter/>
    </div>
    </>
  );
}

export default SignUp;
