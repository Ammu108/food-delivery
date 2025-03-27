import React, { useState } from 'react'
import "./Home.css"
import HeroSection from '../components/HeroSection/HeroSection'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import DisplayFood from '../components/DsiplayFood/DisplayFood'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <>
      <div className='body'>
        <HeroSection/>
        <CategoryMenu category={category} setCategory={setCategory}/>
        <DisplayFood category={category}/>
      </div>
    </>
  )
}

export default Home
