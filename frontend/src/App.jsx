import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Footer from './components/Footer/Footer'
import SignIn from './SignIn/SignIn'
import Cart from './Cart/Cart'
import Customization from './components/Customization/Customization'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <SignIn setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customization/:id" element={<Customization />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
