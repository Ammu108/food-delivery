import React, { useContext, useEffect, useState } from 'react';
import "./Status.css";
import { AppContext } from '../context/AppContext';
import { images } from '../assets/assets';
import { toast } from "react-toastify";
import axios from "axios"

const Status = () => {
    const { getOrderData, orderList, token, url } = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            if (token) {
                setLoading(true);
                await getOrderData();
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    // ✅ Fixed function: Ensures cartItems is always an array
    const getTotalCartItems = (cartItems = []) => {
        let totalItems = 0;
        cartItems.forEach(item => {
            totalItems += item.quantity || 0;
        });
        return totalItems;
    };

    const handleDelete = async (orderId) => {
        if (!window.confirm("Are you sure you want to delete this appointment?")) return;

        try {
            const response = await axios.delete(url + "/api/order/delete-order", { headers: { token }, data: { id: orderId } });

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
        <div className='status-container'>
            <div className='inside-status-container'>
                <div className='my-order-title-div'>
                    <p className='my-orders-title'>My Orders</p>
                </div>
                <hr className='order-bar' />

                <div className='order-details-container'>
                    {loading ? (
                        <div className='loading-div-parent'>
                            <div className='loading-div'>
                                <h2>Loading Orders...</h2>
                                <span className="loader"></span>
                            </div>
                        </div>
                    ) :
                        orderList.length === 0 ? (
                            <div className="empty-cart">
                                <h1>No Orders Placed Yet...</h1>
                            </div>
                        ) : (
                            orderList.map((order) => (
                                <div key={order._id} className='order-details-inside-container'>

                                    <div className='order-img'>
                                        <img src={images.basket} alt='img' />
                                    </div>

                                    <div className='adjustable-items-div'>
                                        <div className='order-items-box'>
                                            {order.cartItems && order.cartItems.map((item, index) => (
                                                <p key={index}>{item.name} x {item.quantity}</p>
                                            ))}
                                        </div>
                                        {order.cartItems && (
                                            <div className='adjustable-order-items'>
                                                <p>Cart Items: {getTotalCartItems(order.cartItems)}</p>
                                            </div>
                                        )}
                                        <div className='adjustable-order-status'>
                                            <p>🟠 {order.status}</p>
                                        </div>

                                    </div>

                                    <div className='order-items'>
                                        {order.cartItems && <p>Cart Items: {getTotalCartItems(order.cartItems)}</p>}
                                    </div>

                                    <div className='order-amount'>
                                        <p>₹ {order.amount}</p>
                                        <div className='adjustable-delete-order-btn'>
                                            <i className="fa-solid fa-trash"></i>
                                        </div>
                                    </div>

                                    <div className='order-status'>
                                        <p>🟠 {order.status}</p>
                                    </div>

                                    {
                                        order.status !== "Out For Delivery" && (
                                            <div onClick={() => handleDelete(order._id)} className='delete-order-btn'>
                                                <i className="fa-solid fa-trash"></i>
                                            </div>
                                        )
                                    }

                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>
    );
};

export default Status;
