import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');

  const handleMenuClick = (newMenu) => {
    setMenu(newMenu);
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="clementaste-logo" className='logo'/>

      <ul className="navbar-menu">
        <li className={menu === "Home" ? "active" : ""} onClick={() => handleMenuClick("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() => handleMenuClick("Menu")}>Menu</li>
        <li className={menu === "About" ? "active" : ""} onClick={() => handleMenuClick("About")}>About</li>
        <li className={menu === "Contact" ? "active" : ""} onClick={() => handleMenuClick("Contact")}>Contact</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search} alt="" className='search-icon' />
        <div className="navbar-search-icon">
          <img src={assets.basket} alt="" className='basket-icon'/>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;