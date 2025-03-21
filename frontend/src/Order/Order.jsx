import React, { useContext, useEffect, useState } from 'react'
import "./Order.css"
import { AppContext } from '../context/AppContext'
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const { getTotalCartAmount, url, token } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [orderData, setOrderData] = useState({
        name: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: "",
        amount: 0,
        paymentMethod: "Cash on Delivery",
    });

    useEffect(() => {
        setOrderData((prevData) => ({
            ...prevData,
            amount: getTotalCartAmount() + 55, // ✅ Updates dynamically
        }));
    }, [getTotalCartAmount]); // ✅ Depend on `getTotalCartAmount`

    const onChangeHandler = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };


    const placeOrder = async (event) => {
        event.preventDefault()
        if (loading) return;
        setLoading(true);

        try {
            const response = await axios.post(url + "/api/order/order-place", orderData, {
                headers: { token },
            });

            if (response.data.success) {
                toast.success("Order placed successfully!");
                setOrderData({
                    name: "", email: "", street: "", city: "", state: "",
                    zipCode: "", country: "", phone: "",
                    amount: getTotalCartAmount() + 55,
                    paymentMethod: "Cash on Delivery"
                });
                navigate("/status")
            } else {
                toast.error(response.data.message || "Something went wrong.");
                console.log(response.data.message)
            }
        } catch (err) {
            toast.error("Failed to place order. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handlePayment = () => {
        alert("The Payment functionality Is Not Added Till Now.")
    }

    return (
        <>
            <div className="body">
                <div className="order-page">
                    <div className="inner-order-page">
                        <div className="delivery-information-section-left">
                            <h1>Delivery Information</h1>
                            <form onSubmit={placeOrder}>
                                <div className='delivery-information-page-container'>
                                    <div className="input-box-div">
                                        <div className="input-container">
                                            <input type="text" name="name" value={orderData.name} onChange={onChangeHandler} className="name-input input" placeholder="Enter Your Name" required />
                                        </div>
                                        <div className="email-container-div">
                                            <input type="email" name="email" value={orderData.email} onChange={onChangeHandler} className="email-input input" placeholder="Email Address" required />
                                        </div>
                                        <div className="street-container-div">
                                            <input type="text" name="street" value={orderData.street} onChange={onChangeHandler} className="street-input input" placeholder="Street" required />
                                        </div>
                                        <div className="input-container">
                                            <input type="text" name="city" value={orderData.city} onChange={onChangeHandler} className="city-input input" placeholder="City" required />
                                            <input type="text" name="state" value={orderData.state} onChange={onChangeHandler}  className="state-input input" placeholder="State"></input>
                                        </div>
                                        <div className="input-container">
                                            <input type="number" name="zipCode" value={orderData.zipCode} onChange={onChangeHandler} className="city-input input" placeholder="Zip Code" required />
                                            <input type="text" name="country" value={orderData.country} onChange={onChangeHandler} className="state-input input" placeholder="Country" required />
                                        </div>
                                        <div className="phone-container-div">
                                            <input type="number" name='phone' value={orderData.phone} onChange={onChangeHandler} className="street-input input" placeholder="Phone Number" required />
                                        </div>
                                    </div>

                                    <div className="delivery-information-section-right">
                                        <div className="order-cart-total-amount-section">
                                            <div className="inner-cart-total-amount">
                                                <h2>Cart Totals</h2>
                                                <div className="sub-total-amount">
                                                    <p className="font-adjust-title">Sub Total</p>
                                                    <p className="font-adjust-items">₹ {getTotalCartAmount()}</p>
                                                </div>
                                                <hr className="cart-bar" />
                                                <div className="total-delivery-fee">
                                                    <p className="font-adjust-title">Delivery Fee</p>
                                                    <p className="font-adjust-items">₹ 55</p>
                                                </div>
                                                <hr className="cart-bar" />
                                                <div className="total-amount">
                                                    <p className="font-adjust-title">Total</p>
                                                    <p className="font-adjust-items">₹ {getTotalCartAmount() + 55}</p>
                                                </div>
                                                <div className="checkOut-btn-div">
                                                    <button disabled={loading} type='submit' className='cash-on-delivery'>{loading ? "Placing Order..." : "CASH ON DELIVERY"}</button>
                                                    {/* <button onClick={handlePayment} className='proceed-to-payment'>PROCEED TO PAYMENT</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
