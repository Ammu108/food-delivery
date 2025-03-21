import React, { useContext, useEffect, useState } from 'react'
import "./FoodList.css"
import { AdminContext } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const FoodList = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getFoodList, aToken, foodList, backendUrl } = useContext(AdminContext)

  useEffect(() => {
    const fetchDoctors = async () => {
      if (aToken) {
        setLoading(true); // Start loading
        await getFoodList(); // Wait for doctors to load
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchDoctors();
  }, [aToken]);

  const handleDelete = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;

    try {
      const response = await axios.post(backendUrl + `/api/food/remove-food`, { id: itemId }, {
        headers: { aToken }
      });

      if (response.data.success) {
        toast.success("Item deleted successfully!");
        navigate("/dashboard")
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item");
    }
  };

  return (
    <>
      <div className='admin-all-doctors-container'>
        <div className='inside-admin-all-doctors-container'>
          {/* <div className='admin-doctors-list-header'>
            <p>All Doctors</p>
          </div> */}

          <div className="admin-doctors-parent-container mt-2">
            {loading ? (
              <div className='loading-div-parent'>
                <div className='loading-div'>
                  <h2>Loading Doctors...</h2>
                  <span className="loader"></span>
                </div>
              </div>
            ) : (
              foodList.map((item, index) => (
                <div key={index} className='food-display-list-item'>
                  <div className='food-display-list-item-img'>
                    <img src={`${backendUrl}/images/` + item.image} className='food-item-img' alt='img' />
                    {/* {!cartItems[id] */}
                    <div className='add-icon'>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    {/* <div className='food-item-count'>
                            <div className='add-icon-minus'>
                                <i className="fa-solid fa-minus"></i>
                            </div>
                            <p></p>
                            <div className='add-icon-add'>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div> */}
                    {/* } */}
                  </div>
                  <div className='food-item-img-about-section'>
                    <div className='food-img-title'>
                      <div className='food-item-name'>
                        <h3 className='fw-bold'>{item.name}</h3>
                      </div>
                      <div className='ratings-star'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                    </div>
                    <div className='food-item-description'>
                      <p>{item.description}.</p>
                    </div>
                    <div className='food-item-actions-btn'>
                      <h6 className='fw-bold'>₹ {item.price}</h6>
                      <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodList
