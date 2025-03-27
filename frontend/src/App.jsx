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
import Order from './Order/Order'
import Customization from './components/Customization/Customization'
import { ToastContainer } from 'react-toastify';
import Status from './Status/Status'
import SearchBar from './SearchBar/SearchBar'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);  
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (  
    <>
      {showLogin ? <SignIn setShowLogin={setShowLogin} /> : <></>}
      <ToastContainer/>
      <Navbar setShowLogin={setShowLogin} setShowSearchBar={setShowSearchBar}/>
      {showSearchBar ? <SearchBar setShowSearchBar={setShowSearchBar}/> : ""}
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customization/:id" element={<Customization />} />
          <Route path="/order" element={<Order />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
