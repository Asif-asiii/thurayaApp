import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { FaLanguage } from 'react-icons/fa';
import image1 from './image/image1.png'; // Ensure this path is correct
import './Navbar.css';

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      // Click outside the navbar
      setIsOpen(false);
    }
  };

  return (
    <section className='navbarMainSection'>  
      <Navbar expand="lg" className="bg-body-tertiary navbar1" ref={navbarRef}>
        <Container className="navbar1a container">
          {/* Logo */}
          <div>
            <Navbar.Brand href="#home" style={{ width: 'fit-content' }} className="logo_image">
              <img src={image1} style={{ width: '100%', maxWidth: '200px' }} className="logo_image" alt="logo" />
            </Navbar.Brand>
          </div>

          {/* Links */}
          <div className={`navbar1b ${isOpen ? 'show' : ''}`}>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="linksOfNav">
              <Link to="/Home" className='links'>Home</Link>

                <Link to="/AboutUs" className="domestic links">About us</Link>
                <Link to="/ContactUs" className='links'>Contact us</Link>
                <Link to="/Login" className='links'>Login</Link>
                <Link to="/SignUp" className='links'>Sign Up</Link>
                
                <Link to="/" className='links'><FaLanguage className="languageicon" /></Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          {/* Hamburger */}
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <TiThMenu className="hamberger" />
          </div>
        </Container>
      </Navbar>
    </section>
  );
}

export default Navbar1;
