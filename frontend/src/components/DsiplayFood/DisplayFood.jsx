import React, { useContext } from 'react'
import "./DisplayFood.css"
import FoodItem from '../FoodItem/FoodItem'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import Menu from '../../Menu/Menu'

const DisplayFood = ({ category }) => {

  const { food_list, url } = useContext(AppContext);
  const navigate = useNavigate();

  const filteredItems = category === "All" ? food_list : food_list.filter(item => item.category === category);
  const visibleItems = filteredItems.slice(0, 6);

  const handleMenuPage = () => {
    navigate(`/menu?${category}`);
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className='food-display-header' id='food-display-header'>
        <h1 className='fw-bold'>Top Dishes Near You</h1>
        <hr className="foodDisplay-bar" />
        <div className='food-display-list'>
          {visibleItems.map((item, index) => (
            <>
              <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={`${url}/images/`+item.image} price={item.price} customization={item.customizations}/>
            </>
          ))}
        </div>
        {filteredItems.length > 5 && (
          <div className='show-more-container'>
            <button onClick={handleMenuPage} className='show-more-button'>
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default DisplayFood
