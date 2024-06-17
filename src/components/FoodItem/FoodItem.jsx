import React, { useState } from 'react';
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount,setItemCount] = useState(0)

  return (
    <div className='food-item'>
      <div className="food-item-container">
        <img className='food-item-img' src={image} alt={name} />
        {!itemCount
           ?<img src='assets.add_icon_white'
        }
        <p>{name}</p>
      </div>
      <p className="food-item desc">{description}</p>
      <p className="food-item-price">R{price}</p>
    </div>
  );
};

export default FoodItem;