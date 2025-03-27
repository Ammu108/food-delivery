import React, { useContext, useEffect, useState } from 'react';
import "./Menu.css";
import { AppContext } from '../context/AppContext';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FoodItem from '../components/FoodItem/FoodItem';

const Menu = () => {
  const { foodMenu, food_list } = useContext(AppContext);
  const { category } = useParams();
  const [active, setActive] = useState(null);
  const [filteredFood, setFilteredFood] = useState([]);
  const [adjustFilterDropDown, setAdjustFilterDropDown] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search"); // Get search term from URL

  const handleActive = (category) => {
    setActive(active === category ? null : category);
  };

  const handleFilterDropDown = () => {
    setAdjustFilterDropDown(!adjustFilterDropDown);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5); // Creates a new shuffled array
  };

  useEffect(() => {
    setLoading(true);

    // let filtered = category ? food_list.filter(doc => doc.category === category) : food_list;
    // let shuffledFood = shuffleArray(filtered);

    // setFilteredFood(shuffledFood);

    let filtered = food_list;

    if (category) {
      filtered = filtered.filter(doc => doc.category === category);
    }

    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'i'); // Case-insensitive regex search
      filtered = filtered.filter(doc => regex.test(doc.name));
    }

    let shuffledFood = shuffleArray(filtered);

    setFilteredFood(shuffledFood);

    setLoading(false);
  }, [category, searchQuery, food_list]);

  return (
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
              {loading ? (
                <div className='adjustbale-loading-div'>
                  <div className='loading-div'>
                    <h2>Loading Food Items...</h2>
                    <span className="loader"></span>
                  </div>
                </div>
              ) : (
                <div className='food-display-list'>
                  {filteredFood.map((item, index) => (
                    <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} customization={item.customizations} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
