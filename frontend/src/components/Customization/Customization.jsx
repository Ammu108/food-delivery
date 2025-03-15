import React, { useContext, useEffect, useState } from 'react'
import "./Customization.css"
import { images } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'

const Customization = () => {

  const { food_list } = useContext(AppContext)
  const { id } = useParams();
  const [filteredAboutFood, setFilteredAboutFood] = useState(null);

  useEffect(() => {
    const filteredFoodItem = food_list.find((food) => food._id === id);
    setFilteredAboutFood(filteredFoodItem);
  }, [food_list, id]);


  if (!filteredAboutFood) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='customization-container'>

        <div className='text-center'>{filteredAboutFood && <h2>Customize Your {filteredAboutFood.name}</h2>}
        </div>
        <hr />
        <div className='customization-inside-container'>

          <div className='left-customization-bar'>
            <div className='customization-food-item-pic'>
              <img src={filteredAboutFood?.imageUrl} alt="img" />
            </div>
            <div className='total-prce'>
              <p>Total Price: ₹ {filteredAboutFood.price}.00</p>
            </div>
          </div>

          <div className='right-customization-bar'>
            {filteredAboutFood?.customizations && Object.keys(filteredAboutFood.customizations).map((category) => (
              <div key={category} className='customize-box-1'>
                <h5 className='option-title fw-bold'>{category}:</h5>
                {filteredAboutFood.customizations[category].map((option, index) => (
                  <div key={index} className='box-1-option-1'>
                    <p>{option.option} (₹ {option.price}.00)</p>
                    <input type="radio" name={category} id={option.option} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='total-prce-adjustable'>
          <p>Total Price: {filteredAboutFood.price}</p>
        </div>

        <div className='actions-btn'>
          <button className='add-to-cart'>Add To Cart</button>
          <button className='buy-now'>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Customization
