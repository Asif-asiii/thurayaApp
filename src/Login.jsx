import React from 'react';
import './Login.css';
import Navbar1 from './Navbar1';
import Footer from './footer/Footer';
import Lastfooter from './lastfooter/Lastfooter';
const Login = () => {
  return (
    <>     
    <Navbar1/>
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
    <div className='aboutFooter'>   
    <Footer/>
    <Lastfooter/>
    </div>
    </>
  );
}

export default Login;
