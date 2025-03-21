import React from 'react'
import "./Footer.css"
import { images } from '../../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='footer-section'>
                <div className='inner-footer-section'>
                    <div className='footer-content-left'>
                        <div className='footer-icon-div'>
                            <div className='logo-div'>
                                <img src={images.AtomLogo} alt='img' />
                            </div>
                            <h1 className='font-title-logo'>Atom</h1>
                        </div>
                        <p className='font-size'>Your go-to food delivery app offering a wide selection of delicious meals, easy order tracking, and seamless customer support. Stay connected with us and enjoy exclusive offers by subscribing to our newsletter. Download our app today for fast and convenient delivery at your doorstep!</p>
                        <div className="social-media-icons">
                            <a href="https://facebook.com" className="text-light"><i className="hover-transition fab fa-facebook fa-2x"></i></a>
                            <a href="https://twitter.com" className="text-light"><i className="hover-transition fab fa-twitter fa-2x"></i></a>
                            <a href="https://instagram.com" className="text-light"><i className="hover-transition fab fa-instagram fa-2x"></i></a>
                            <a href="https://youtube.com" className="text-light"><i className="hover-transition fab fa-youtube fa-2x"></i></a>
                        </div>
                    </div>

                    <div className='footer-content-middle'>
                        <h2 className='font-size'>Company</h2>
                        <li className='font-size'>home</li>
                        <li className='font-size'>About Us</li>
                        <li className='font-size'>delivery</li>
                        <li className='font-size'>Privacy Policy</li>
                    </div>

                    <div className='footer-section-right'>
                        <h4 className='font-size fw-bold'>+91-999-071-6368</h4>
                        <p className='font-size'>Contact @amenx.com</p>
                        <button onClick={()=> window.open("https://foodadmin-beige.vercel.app/", "_blank")} className='admin-btn'>Admin Panel</button>
                    </div>
                </div>
                <div className='copy-right'>
                    <hr className='border-line' />
                    <p className='font-size'>&copy; 2024 Food Delivery App. All Rights Reserved. Designed By AmenX</p>
                </div>
            </div>
        </>
    )
}

export default Footer
