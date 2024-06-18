import React from 'react'
import './Menu.css'
import Cake from '../../assets/cakeberry.jpeg';
import CheeseToast from '../../assets/cheese-toast.jpeg'
import CheeseBread from '../../assets/cheeseBread.jpeg'
import VanilaCake from '../../assets/chocoVanila.jpeg'
import GarlicBread from '../../assets/garlic-bread.webp'
import Naan from '../../assets/naan-bread.jpeg'


const Menu = () => {
    return (
      <div className="menu-container">
        <div className='menu-image-container'>
        <h1>Chocolate Cake</h1>
        <img className='menu-image' src={Cake} alt="Cakeberry" />
        <p>Delicious Strawberry Cake for Summer</p>
      </div>

      <div className='menu-image-container'>
        <h1>Cheese Toast</h1>
        <img className='menu-image' src={CheeseToast} alt="Cakeberry" />
        <p>Crunchy Cheese Toast for Breakfast"</p>
      </div>

      <div className='menu-image-container'>
        <h1>Cheese Bread</h1>
        <img className='menu-image' src={CheeseBread} alt="Cakeberry" />
        <p>Savory Cheesebread Perfect for Snacking</p>
      </div>

      <div className='menu-image-container'>
        <h1>Vanilla Cake</h1>
        <img className='menu-image' src={VanilaCake} alt="Cakeberry" />
        <p>Moist Vanilla Cake So Delicious</p>
      </div>

      <div className='menu-image-container'>
        <h1>Naan Bread</h1>
        <img className='menu-image' src={Naan} alt="Cakeberry" />
        <p>Soft Naan Bread Perfect Companion</p>
      </div>

      <div className='menu-image-container'>
        <h1>Garlic Bread</h1>
        <img className='menu-image' src={GarlicBread} alt="Cakeberry" />
        <p>Aromatic Garlic Bread So Tasty</p>
      </div>
      
      </div>
    );
  };
  
  export default Menu;