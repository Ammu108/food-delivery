import React from 'react'
import "./Contact.css"
import { images } from '../assets/assets'

const Contact = () => {
  return (
    <>
      <div className='contact-page-container'>
        <div className='inside-contact-page-container'>
          <div className='contact-box'>

            <div className='contact-box-img'>
              <img src={images.Contact} alt="img" />
            </div>

            <div className='contact-content-div'>
              <h5><strong>Contact Us</strong></h5>
              <p>We’re here to serve you with the best food delivery experience! Have questions, feedback, or
                need assistance with your order? Feel free to reach out to us through the following channels:
              </p>
              <p className='addres'>Office Address: 123 Foodie Street, Flavor Town, FT 98765</p>

              <div className='infos phone-numbers-div'>
                <p className='info-title phone-number mb-2'><strong>Phone Numbers :</strong></p>
                <p>Customer Support: +1 (123) 456-7890</p>
                <p>Restaurant Partnerships: +1 (123) 456-7891</p>
                <p>Delivery Assistance: +1 (123) 456-7899</p>
              </div>

              <div className='infos email-div mt-3'>
                <p className='info-title email mb-2'><strong>Email :</strong></p>
                <p>Support: atomKitchen@gmail.com</p>
              </div>

              {/* <div className='available-time'>
                 <img src="/24-hours.png" alt="img" />
              </div> */}
            </div>
          </div>

          <div className='adjustable-phone-div infos phone-numbers-div'>
            <p className='info-title phone-number'><strong>Phone Numbers :</strong></p>
            <p>Customer Support: +1 (123) 456-7890</p>
            <p>Restaurant Partnerships: +1 (123) 456-7891</p>
            <p>Delivery Assistance: +1 (123) 456-7899</p>
          </div>

          <div className='adjuistable-email-div infos email-div'>
            <p className='info-title email'><strong>Email :</strong></p>
            <p>Support: atomKitchen@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
