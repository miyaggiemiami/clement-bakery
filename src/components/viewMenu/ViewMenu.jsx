import React from 'react'
import './ViewMenu.css'
import { menu_list } from '../../assets/assets'

const ViewMenu = () => {
    return (
      <div className='view-menu' id='view-menu'>
          <h1>View Our Menu </h1>
          <p className='view-menu-text'>dont just look, just buy </p>
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
