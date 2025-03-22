import React, { useContext, useEffect, useState } from 'react';
import "./Orders.css";
import { AdminContext } from '../../context/AdminContext';
import { images } from '../../assets/assets';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { orderList, getOrderData, aToken, backendUrl } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      if (aToken) {
        setLoading(true);
        await getOrderData();
        setLoading(false);
      }
    };
    fetchOrders();
  }, [aToken]);

  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(backendUrl + "/api/order/update", { orderId, status: newStatus }, { headers: { aToken } })

      if (response.data.success) {
        toast.success("Order Updated Sucessfully.")
        getOrderData(); // Refresh order list after update
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const handleGoBack = () => {
    navigate("/dashboard")
  }

  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const response = await axios.delete(backendUrl + "/api/order/delete-order", { headers: { aToken }, data: { id: orderId } });

      if (response.data.success) {
        toast.success("Order deleted successfully!");
        // navigate("/all-appointments");
      } else {
        toast.error("Failed to delete order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Error deleting order");
    }
  };

  return (
    <div className='admin-orders-container'>
      <div className='order-page-header'>
        <div className='back-btn-div'>
          <button className='back-btn' onClick={handleGoBack}><i class="fa-solid fa-arrow-left"></i>Back</button>
        </div>
        <h2>All Orders</h2>
      </div>

      {loading ? (
        <div className='loading-div-parent'>
          <div className='loading-div'>
            <h2>Loading Orders...</h2>
            <span className="loader"></span>
          </div>
        </div>
      ) : (
        orderList.map((order, index) => (
          <div key={order._id} className="admin-orders-inside-container mt-3">

            <div className='order-details-id-box'>
              <p>Order ID: {order._id}</p>
              <button className='order-delete-btn' onClick={() => handleDelete(order._id)}>Delete</button>
            </div>

            <div className='order-items-details'>
              <div className='number-of-orders'>
                <p>{index + 1}.</p>
              </div>
              <div className='order-item-img-div'>
                <img src={images.order} alt='Order' />
              </div>
              <div className='inside-order-items-details'>
                <p>
                  {order.cartItems.map(item => (
                    <span key={item._id}>{item.name} x {item.quantity}, </span>
                  ))}
                </p>
              </div>
              <div className='total-payable-amount'>
                <p>Total Payable Amount: ₹{order.amount}</p>
                <p>{order.paymentMethod}</p>
              </div>
            </div>

            <div className='extra-details'>
              <div className='user-address-details'>
                <div className='user-name'>
                  <p>{order.name}</p>
                </div>
                <p>{order.street}, {order.city}, {order.state} - {order.zipCode}</p>
              </div>

              <div className="col-md-6 actions-btn">
                <select id="category" name="category" onChange={(e) => updateStatus(order._id, e.target.value)} className="form-control" value={order.status}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Order Delivered">Order Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;