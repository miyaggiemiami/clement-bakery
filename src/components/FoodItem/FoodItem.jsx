import React from 'react';
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-container">
        <img className='food-item-img' src={image} alt={name} />
        <p>{name}</p>
      </div>
      <p className="food-item desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;