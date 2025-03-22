import React, { useContext, useEffect, useState } from 'react'
import "./Status.css"
import { AppContext } from '../context/AppContext';
import { images } from '../assets/assets';

const Status = () => {

    const { getOrderData, orderList, token } = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            if (token) {
                setLoading(true); // Start loading
                await getOrderData(); // Wait for doctors to load
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchOrders();
    }, [token]);

    const getTotalCartItems = () => {
        const uniqueItems = new Set();

        orderList.forEach(order => {
            order.cartItems.forEach(item => {
                uniqueItems.add(item.name); // Add unique item names to the Set
            });
        });

        return uniqueItems.size; // Return count of unique items
    };


    return (
        <>
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
                        ) : (
                            <>
                                {orderList.map((order) => (
                                    <div key={order._id} className='order-details-inside-container'>

                                        <div className='order-img'>
                                            <img src={images.basket} alt='img' />
                                        </div>

                                        <div className='adjustable-items-div'>
                                            <div className='order-items-box'>
                                                {order.cartItems.map((item) => (
                                                    <p>{item.name} x {item.quantity}</p>
                                                ))}
                                            </div>
                                            <div className='adjustable-order-items'>
                                                <p>Cart Items: {getTotalCartItems()}</p>
                                            </div>
                                            <div className='adjustable-order-status'>
                                                <p>🟠{order.status}</p>
                                            </div>
                                        </div>

                                        <div className='order-items'>
                                            <p>Cart Items: {getTotalCartItems()}</p>
                                        </div>

                                        <div className='order-amount'>
                                            <p>₹ {order.amount}</p>
                                        </div>

                                        <div className='order-status'>
                                            <p>🟠{order.status}</p>
                                        </div>

                                    </div>
                                ))}

                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Status
