import React, { useContext, useEffect, useState } from 'react'
import "./Menu.css"
import { AppContext } from '../context/AppContext'
import { Link, useParams } from 'react-router-dom';
import FoodItem from '../components/FoodItem/FoodItem';
import Customization from '../components/Customization/Customization';

const Menu = () => {

  const { foodMenu, food_list } = useContext(AppContext);
  const { category } = useParams();
  const [active, setActive] = useState(null)
  const [filteredFood, setFilteredFood] = useState([])
  const [adjustFilterDropDown, setAdjustFilterDropDown] = useState(false)

  const handleActive = (category) => {
    setActive(active === category ? null : category);
  };

  const handleFilterDropDown = () => {
    setAdjustFilterDropDown(!adjustFilterDropDown)
  }

  useEffect(() => {
    if (category) {
      const filtered = food_list.filter(doc => doc.category === category);
      setFilteredFood(filtered);
    } else {
      setFilteredFood(food_list);
    }

  }, [category, food_list]);


  return (
    <>
      <div className='menu-container'>
        <div className='inside-menu-container'>
          <p className='category-title'>{category ? `Delicious ${category} Dishes Just for You!` : "Explore Our Tasty Food Categories."}</p>
          <hr className='category-bar' />

          <div className="category-filter-box">
            <div className="adjust-specilaity-container-div">

              <div onClick={handleFilterDropDown} className={`adjust-specilaity-container ${adjustFilterDropDown ? "active-filter" : ""}`}>
                <button>Filter<i className="fa-solid fa-filter mx-1"></i></button>
              </div>

            </div>
          </div>

          <div className={`adjustable-menu-category-container ${adjustFilterDropDown ? "active-adjustFilterDropDown" : ""}`}>
            <div className="dropdown-speciality">
              {foodMenu.map((item, index) => (
                <Link key={index} to={category === item.name ? "/menu" : `/menu/${item.name}`} onClick={() => setActive(item.name)}>
                  <div className={`dropDown-speciality-type ${active === item.name ? "activeSpeciality" : ""}`} onClick={() => setAdjustFilterDropDown(false)}>
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className='common-container-category-fooddisplay'>
            <div className='left-container'>
              {foodMenu.map((item, index) => (
                <Link key={index} to={category === item.name ? "/menu" : `/menu/${item.name}`} className={`menu-category ${active === item.name ? "activeCategory" : ""}`} onClick={() => handleActive(item.name)}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className='right-conatiner'>
              <div className='inside-right-container'>
                <div className='food-display-list'>
                  {filteredFood.map((item, index) => (
                    <>
                      <FoodItem key={index} id={item._id} name={item.name} description={item.desc} image={item.imageUrl} price={item.price} customization={item.customizations}/>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Menu
