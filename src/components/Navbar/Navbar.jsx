import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li className={menu === "Home" ? "active" : ""}>
          <Link to="/" onClick={() => handleMenuClick("Home")}>Home</Link>
        </li>
        <li className={menu === "Menu" ? "active" : ""}>
          <Link to="/menu" onClick={() => handleMenuClick("Menu")}>Menu</Link>
        </li>
        <li className={menu === "About" ? "active" : ""}>
          <Link to="/about" onClick={() => handleMenuClick("About")}>About</Link>
        </li>
        <li className={menu === "Contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => handleMenuClick("Contact")}>Contact</Link>
        </li>
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