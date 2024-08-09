import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar1";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
// import Footer from "./footer/Footer";
// import Lastfooter from "./lastfooter/Lastfooter";
import Footer from "./footer/Footer";
import Lastfooter from "./lastfooter/Lastfooter";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        {/*<Navbar1 />*/}
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />


          {/* Add other routes here */}
        </Routes>
       {/* <Footer />*/}
       {/* <Lastfooter />*/}
      </div>
    </Router>
  );
}

export default App;
