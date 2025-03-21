import React, { useContext, useEffect, useState } from 'react'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../../context/AdminContext';
import { images } from '../../assets/assets';

const Dashboard = () => {
  const navigate = useNavigate();
  const { dashData, aToken, getDashData } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (aToken) {
        setLoading(true); // Start loading
        await getDashData(); // Wait for doctors to load
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchUsers();
  }, [aToken])

  const handleUsers = () => {
    navigate("/allusers")
  }

  const handleOrders = () => {
    navigate("/orders")
  }

  const handleLists = () => {
    navigate("/list")
  }

  return (
    <>
      <div className='admin-dashboard-container'>
        <div className='admin-dashboard-inside-container'>

          <div className='dashboard-boxes-container'>

            <div className='dashboard-boxes-inside-container'>

              <div onClick={handleUsers} className='dashboard-box dashboard-box-1'>
                <div className='admin-dashboard-img'>
                  <img src={images.people} alt='img' />
                </div>
                <div className='admin-dashboard-users'>
                  <p className='user-no'>{loading ? "--" : dashData.users}</p>
                  <p className='mx-3 user-title'>Users</p>
                </div>
              </div>

              <div onClick={handleOrders} className='dashboard-box dashboard-box-2'>
                <div className='admin-dashboard-img'>
                  <img src={images.orders} alt='img' />
                </div>
                <div className='admin-dashboard-users'>
                  <p className='user-no'>{loading ? "--" : dashData.totalOrders}</p>
                  <p className='mx-3 user-title'>Orders</p>
                </div>
              </div>

              <div onClick={handleLists} className='dashboard-box dashboard-box-3'>
                <div className='admin-dashboard-img'>
                  <img src={images.foodItem} alt='img' />
                </div>
                <div className='admin-dashboard-users'>
                  <p className='user-no'>{loading ? "--" : dashData.list}</p>
                  <p className='mx-3 user-title'>Food Items</p>
                </div>
              </div>

            </div>

            <div className='dashboard-remaining-last-container'>
              <div className='dashboard-total-orders-img'>
                <img src={images.orders} alt='img' />
              </div>
              <div className='total-order-status-div'>
                <div className='total-order-status-title'>
                  <p className='fw-bold fs-5'>Total Order Status :-</p>
                </div>
                <div className='total-order-status-options'>
                  <div className='food-processing status-box'>
                    <p>Food Processing : </p>
                    <p className='mt-1 mx-2'>{loading ? "--" : dashData.foodProcessing}</p>
                  </div>
                  <div className='out-for-delivery status-box'>
                    <p>Out For Delivery : </p>
                    <p className='mt-1 mx-2'>{loading ? "--" : dashData.outForDelivery}</p>
                  </div>
                  <div className='Order Delivered status-box'>
                    <p>Order Delivered : </p>
                    <p className='mt-1 mx-2'>{loading ? "--" : dashData.orderDelivered}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
