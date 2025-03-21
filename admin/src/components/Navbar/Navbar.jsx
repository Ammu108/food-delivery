import React, { useContext } from 'react'
import "./Navbar.css"
import { images } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate('/');
        aToken && setAToken("");
        aToken && localStorage.removeItem("aToken");
    }

  return (
    <>
      <div className='admin-navbar-container'>
        <div className='admin-navbar-inside-container'>

            <div className='admin-logo-div'>
                <div className='admin-logo-img-div'>
                    <img src={images.logo} alt='img'/>
                </div>
                <div className='admin-logo-title'>
                    <h3 className='title-text'>Atom Kitchen</h3>
                    <p className='admin-text'>Admin</p>
                </div>
            </div>

            <div onClick={logoutHandler} className='admin-logout-container'>
                <button>Logout</button>
            </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
