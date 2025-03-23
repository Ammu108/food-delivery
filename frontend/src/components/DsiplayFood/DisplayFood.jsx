import React, { useContext, useEffect, useState } from 'react';
import "./DisplayFood.css";
import FoodItem from '../FoodItem/FoodItem';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const DisplayFood = ({ category }) => {
  const { food_list } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Fetch and shuffle items when component mounts or category changes
  useEffect(() => {
    setLoading(true); // Start loading
      const filteredItems = category === "All" ? food_list : food_list.filter(item => item.category === category);
      setVisibleItems(shuffleArray([...filteredItems]).slice(0, 6));
      setLoading(false); // Stop loading
  }, [category, food_list]);

  const handleMenuPage = () => {
    navigate(`/menu?${category}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='food-display-header' id='food-display-header'>
      <h1 className='fw-bold'>Top Dishes Near You</h1>
      <hr className="foodDisplay-bar" />

      <div className='food-display-list'>
        {loading ? (
          <div className='loading-div-parent'>
            <div className='loading-div'>
              <h2>Loading Items...</h2>
              <span className="loader"></span>
            </div>
          </div>
        ) : (
          visibleItems.map((item, index) => (
            <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} customization={item.customizations} />
          ))
        )}
      </div>

      {!loading && visibleItems.length > 5 && (
        <div className='show-more-container'>
          <button onClick={handleMenuPage} className='show-more-button'>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayFood;
