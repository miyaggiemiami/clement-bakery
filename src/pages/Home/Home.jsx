import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ViewMenu from '../../components/viewMenu/ViewMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Menu from '../Menu/Menu'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>

        <Header />
        <ViewMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        
    </div>
  )
}

export default Home