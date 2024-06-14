import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ViewMenu from '../../components/viewMenu/ViewMenu'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
        <>
        <Header />
        <ViewMenu category={category} setCategory={setCategory} />
        </>
    </div>
  )
}

export default Home