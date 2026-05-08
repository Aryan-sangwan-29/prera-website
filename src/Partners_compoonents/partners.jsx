import './Partners.css';
import React from "react";
import Nav from '../Navbar.jsx';
import logo1 from '../assets/Anindya.png'; // DO NOT DELETE THESE IMPORTS
import logo2 from '../assets/Culmyca.png'; // THEY ARE NEEDED FOR THE LOGOS BELOW


function Partners() {
  return (
    <div className="partnerPage">

      <div className="partnerTop">

        <h1 className="mainHeading">
          OUR <span>PARTNERS</span>
        </h1>

        <p className="subText">
          We collaborate with leading brands to create impactful event
          experiences and meaningful partnerships.
        </p>
      </div>

      <div className="logoGrid">
        <div className="logoBox"><img src={logo1} alt="logo 1" /></div>
        <div className="logoBox"><img src={logo2} alt="logo 2" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 3" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 4" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 5" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 6" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 7" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 8" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 9" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 10" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 11" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 12" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 13" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 14" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 15" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 16" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 17" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 18" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 19" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 20" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 21" /></div>
        <div className="logoBox"><img src={logo1} alt="logo 22" /></div>
      </div>

    </div>
  );
}

export default Partners;