import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={logo} alt="" />
          <p>Clemntaste is a culinary experience that combines the freshness of citrus with the richness of sweet treats. Imagine biting into a juicy orange, only to discover a velvety chocolate center. This innovative flavor fusion will tantalize your taste buds and leave you craving more of its unique delight.</p>
        </div>
        <div className="footer-content-center">
            <h2>Clementaste</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+27 614 906 458</li>
                <li>clementmorare971@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 clementaste.com - All Right Reserved  </p>
    </div>
  );
};

export default Footer;