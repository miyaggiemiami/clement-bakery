import React from 'react'
import './Navbar.css'
import  assets from '../../assets/assets'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="clementaste-logo" className='logo'/>
        <ul className="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search} alt="" className='search-icon' />
            <div className="navbar-search-icon">
                <img src={assets.basket} alt="" className='basket-icon'/>
                <div className="dot"></div>
            </div>
        </div>

    </div>
  )
}

export default Navbar