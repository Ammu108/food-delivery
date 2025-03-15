import React from 'react'
import "./CategoryMenu.css"
import { foodMenu } from '../../assets/assets'

const CategoryMenu = ({category, setCategory}) => {
    return (
        <>
            <div className='menu-section-parent'>
                <div className='menu-header'>
                    <h1>Explore Our Tasty Menu</h1>
                    <p>Take a look at our menu filled with delicious dishes. From appetizers to main courses, every item is made with care. Find something tasty and enjoy a great meal!</p>
                </div>
                <div className='box'>
                    {foodMenu.map((item, index) => (
                        <div onClick={() => setCategory(prev => prev === item.name ? "All" : item.name)} key={index} className='inner-box'>
                            <div className='menu-image-div'>
                                <img src={item.imageUrl} className={ `img ${category===item.name ? "active" : ""}`} alt='img' />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryMenu
