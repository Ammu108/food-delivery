import React, { useContext, useState } from 'react'
import { images } from '../../assets/assets'
import "./Navbar.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Navbar = ({ setShowLogin, setShowSearchBar }) => {

  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { token, setToken, user, setUser } = useContext(AppContext);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleSetMenu = () => {
    setMenu(!menu);
  }

  const handleDropdown = () => {
    setDropDown(!dropDown);
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setToken("")
    setUser(null)
    navigate("/")
    setMenu(false)
  }

  const handleSearchBar = () => {
    setShowSearchBar(true);
  }

  return (
    <>
      <div className='navbar-container'>
        <div className='inside-navbar-container'>

          <div className='navbar-left-box'>
            <Link to="/" className="logo-link">
              <div className='logo-div'>
                <img src={images.AtomLogo} alt='img' />
              </div>
              <p>Atom</p>
            </Link>
          </div>

          <div className='navbar-middle-box'>
            <ul className='navbar-middle-box-ul'>
              <li><Link to="/" className={`nav-menu ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
              <li><Link to="/menu" className={`nav-menu ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link></li>
              <li><Link to="/about" className={`nav-menu ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
              <li><Link to="/contact" className={`nav-menu ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link></li>
            </ul>
          </div>

          {menu && (
            <div className={`navbar-sidebar-box ${menu ? "active" : ""}`}>
              <div onClick={handleSetMenu} className='cross-sidebar'>
                <i className="fa-solid fa-xmark"></i>
              </div>

              <ul className='navbar-side-bar-box-ul'>
                <Link to="/" onClick={() => setMenu(false)} className={`nav-menu ${location.pathname === '/' ? 'sideActive' : ''}`}>Home</Link>
                <Link to="/menu" onClick={() => setMenu(false)} className={`nav-menu ${location.pathname === '/menu' ? 'sideActive' : ''}`}>Menu</Link>
                <Link to="/about" onClick={() => setMenu(false)} className={`nav-menu ${location.pathname === '/about' ? 'sideActive' : ''}`}>About Us</Link>
                <Link to="/contact" onClick={() => setMenu(false)} className={`nav-menu ${location.pathname === '/contact' ? 'sideActive' : ''}`}>Conatct Us</Link>

                {token && user && (
                  <>
                    <div className='user-details-div'>
                      <i className="fa-solid fa-user"></i>
                      <div className='user-details-text-div mt-2'>
                        <p>{user.name}</p>
                        <p className='user-email'>{user.email}</p>
                      </div>
                    </div>

                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                    <Link to="/status">Orders</Link>
                  </>
                )}
              </ul>
            </div>
          )}

          <div className='navbar-right-box'>
            <i onClick={handleSearchBar} className="fa-solid fa-magnifying-glass"></i>
            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>

            {!token ? (
              <div onClick={() => setShowLogin(true)} className='sign-in-div'>
                <button className='sign-in-btn'>Sign In</button>
              </div>
            ) : (
              <div className='user-details-container'>
                <div className='user-deatils' onClick={handleDropdown}>
                  <i className="fa-solid fa-user"></i>
                </div>
                {dropDown && user && (
                  <div className='dropdown-container'>
                    <ul className="dropdown-menu">
                      <a className="dropdown-item text-white">{user.name}</a>
                      <a className="dropdown-item text-white email">{user.email}</a>
                      <Link to="/status" onClick={()=>setDropDown(false)} className='order-link text-white'>Orders</Link>
                      <a className="dropdown-item text-white mt-3" onClick={handleLogout} style={{cursor:"pointer"}}>Logout</a>
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className='show-menu-div'>
              <i onClick={handleSetMenu} className="fa-solid fa-bars"></i>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
