import React from 'react'
import Background from '../../assets/background.jpeg'
import './About.css'

const About = () => {
  return (
    <div className='about-us-container'>
  <h1>About Us</h1>
  <div className='aboutUs-image'>
    <img src={Background} alt="" />
  </div>
  <div className='aboutUs-content'>
    <p>Clementaste Bakery is a family-owned business that has been passionate about baking for over 20 years.</p>
    <p>We take pride in our commitment to using only the freshest ingredients, sourced locally whenever possible, to create delicious treats that are both healthy and indulgent.</p>
    <p>Our bakery is dedicated to providing exceptional customer service, and we strive to make every visit to our shop a memorable one.</p>
    
  </div>
  <div className='aboutUs-stats'>
    <div className='stat'>
      <h2>20+</h2>
      <p>Years of Baking Experience</p>
    </div>
    <div className='stat'>
      <h2>100+</h2>
      <p>Recipes Developed In-House</p>
    </div>
    <div className='stat'>
      <h2>5-Star</h2>
      <p>Average Customer Rating</p>
    </div>
  </div>
</div>
  )
}

export default About