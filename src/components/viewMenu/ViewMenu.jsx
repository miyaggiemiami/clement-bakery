import React from 'react'
import './ViewMenu.css'
import assets, { menu_list } from '../../assets/assets'

const ViewMenu = () => {
    return (
      <div className='view-menu' id='view-menu'>
        <div className="home-logo-container">
        <img src={assets.logo}alt="Logo" className='home-logo'/>
        <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
          </div>
          <h1>View Our Menu </h1>
          <p className='view-menu-text'> Taste the freshness! Our bakery uses only the best ingredients to make our treats</p>
          <div className='view-menu-list'>
              {menu_list.map((item, index) => {
                  return(
                      <div key={index} className="view-menu-list-item">
                          <img src={item.menu_image} alt="" />
                          <p>{item.menu_name}</p>
                      </div>
                  )
              })}
          </div>
      </div>
    )
  }
  
  export default ViewMenu
