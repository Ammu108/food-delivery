import React from 'react'
import "./HeroSection.css"
import { images } from '../../assets/assets'

const HeroSection = () => {
    return (
        <>
            <div className='hero-section-parent'>
                <div className='hero-section'>
                    <div className="overlay"></div>
                    <img src={images.heroImage} alt="Hero Image" />
                    <div className='hero-text'>
                        <h1>Craving Tasty?<br />Get It Delivered Fast!</h1>
                        <p>Indulge in mouth-watering meals from top restaurants, delivered hot and fresh to your door.<br />
                            Whether you're craving comfort food or something exotic, we've got you covered.
                            Place your order now and enjoy a delightful dining experience at home!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
