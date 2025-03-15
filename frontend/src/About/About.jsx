import React from 'react'
import "./About.css"
import { images } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="aabout-page-container">
        <div className="inside-about-page-container">
          <div className="about-page-box">
            <div className="about-page-img">
              <img src={images.About} alt="img" />
            </div>
            <div className="about-page-content">
              <div className="about-div">
                <h5>
                  <strong>About Us</strong>
                </h5>
                <p>
                  Welcome to Atom Kitchen, your trusted food delivery platform that brings
                  delicious meals from your favorite restaurants straight to your doorstep. Our goal is
                  to make ordering food easy, fast, and enjoyable, ensuring every bite is a delight!
                </p>
              </div>

              <div className="mission-div">
                <h5>
                  <strong>Our Mission</strong>
                </h5>
                <p>
                  At Atom Kitchen, we strive to connect food lovers with a wide variety of cuisines
                  while ensuring a seamless and satisfying experience. Our mission is to deliver fresh,
                  high-quality meals quickly and affordably, making mealtime stress-free and enjoyable.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-adjustable-div">
            <h5>
              <strong>Our Mission</strong>
            </h5>
            <p>
              At Atom Kitchen, we strive to connect food lovers with a wide variety of cuisines
              while ensuring a seamless and satisfying experience. Our mission is to deliver fresh,
              high-quality meals quickly and affordably, making mealtime stress-free and enjoyable.
            </p>
          </div>


          <div className="why-choose-box">
            <h5><strong>Why Choose Us?</strong></h5>
          </div>

          <div className="why-choose-us-div">
            <div className="choose-box">
            <p>🍽️ **Variety of Choices:** From fast food to gourmet meals, we bring you an extensive range of cuisines.</p>
            </div>

            <div className="choose-box">
            <p>🚀 **Fast & Reliable Delivery:** Our efficient delivery partners ensure your food arrives hot and fresh.</p>
            </div>

            <div className="choose-box">
              <p>📱**User-Friendly App:** A smooth ordering experience with real-time tracking and secure payments.</p>
            </div>

          </div>

          <div className="about-contact-box">
            <h5><strong>Contact Us</strong></h5>
            <p>Have questions, feedback, or need support? We're here to help!  
            Get in touch with us to make your food ordering experience even better.  

              <img onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/contact") }} src={images.Share} alt="img" />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
