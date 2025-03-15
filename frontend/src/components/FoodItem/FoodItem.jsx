import React from 'react'
import "./FoodItem.css"
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, image, description, name, price }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='food-display-list-item'>
                <div className='food-display-list-item-img'>
                    <img src={image} className='food-item-img' alt='img' />
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
                <div onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/customization/${id}`)
                }} className='food-item-img-about-section'>
                    <div className='food-img-title'>
                        <div className='food-item-name'>
                            <h3 className='fw-bold'>{name}</h3>
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
                        <p>{description}.</p>
                    </div>
                    <h6 className='fw-bold'>₹ {price}</h6>
                </div>
            </div>
        </>
    )
}

export default FoodItem
