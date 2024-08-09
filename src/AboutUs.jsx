import React from 'react'
import image2 from "./mobile.png";
import "./AboutUs.css";
import Navbar1 from './Navbar1';
import Footer from './footer/Footer';
import Lastfooter from './lastfooter/Lastfooter';
import { Last } from 'react-bootstrap/esm/PageItem';
function AboutUS() {
  return (
    <>  
    <Navbar1 />
    <div className='aboutMain'>
      
    <div className='containerOfTwoDivs'>   
     {/* this is for image which will be on left side */}
      <div className='aboutImage'>
      <img src={image2} alt='this is an image' width={500} height={500}/>
      </div>

      {/*this section will be right aligned*/}
      <div className='textAbout'>
      <h1>About</h1>
      <p>It doesn’t matter how far your next mission or adventure takes you. It doesn’t matter how far off the grid you are. You can always count on Thuraya Refill to stay connected with the world.

      </p>

      <p>Thuraya Refill is the fastest, easiest, and most secure way to recharge your Thuraya number from anywhere, at any time. It enables you to instantly top-up your Thuraya Prepaid subscription or retain Thuraya airtime units for future use through our recharge platform in 3 simple steps.</p>

      <div className='aboutChild'>
       <div>
       <h1>Quick Refill</h1>
       </div>

       <div><h1>Refill Units</h1></div>

      </div>

      <p>Thuraya is one of the leading Mobile Satellite Service (MSS) operators that provides superior network communications and uninterrupted coverage across two-thirds of the globe. It offers a wide range of voice and data devices available with Postpaid and Prepaid plans. Using Thuraya Refill, you can now recharge your Prepaid connection hassle-free.</p>

      <p>Welcome to Thuraya Refill. Welcome to a more connected world.

      </p>

      </div>

      </div>
      
    </div>
    <div className="aboutFooter">   
   <Footer />
   <Lastfooter/>
   </div>
    </>
  )
}

export default AboutUS;
