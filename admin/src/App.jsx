import React, { useContext } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import Dashboard from './pages/Dashboard/Dashboard';
import AddItem from './pages/AddItem/AddItem';
import FoodList from './pages/FoodList/FoodList';
import Orders from './pages/Orders/Orders';
import AllUsers from './AllUsers/AllUsers'
import { AdminContext } from './context/AdminContext'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify';

const App = () => {

  const { aToken } = useContext(AdminContext);


  return (
    <>
      {aToken ? (
        <div className='admin-components'>
          <ToastContainer />
          <Navbar />
          <div className='admin-sidebar-components'>
            <SideBar />
            <div className='inside-admin-components'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add" element={<AddItem />} />
                <Route path="/list" element={<FoodList />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/allusers" element={<AllUsers />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Login />
          <ToastContainer />
        </>
      )}
    </>
  )
}

export default App
