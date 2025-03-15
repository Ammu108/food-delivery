import React from 'react'
import "./Cart.css"

const Cart = () => {
    return (
        <>
            <div className='cart-body'>
                <div className='cart-section-page'>
                    <div className="inner-cart-section-page">
                        <div className="cart-items-title">
                            <div className="cart-item-div">
                                <p className="font-bold font-adjust-title">Items</p>
                            </div>
                            <div className="cart-item-title-div">
                                <p className="font-bold font-adjust-title">Title</p>
                            </div>
                            <div className="cart-item-price-div">
                                <p className="font-bold font-adjust-title">Price</p>
                            </div>
                            <div className="cart-item-quantity-div">
                                <p className="font-bold font-adjust-title">
                                    <span className="full-text">Quantity</span>
                                    <span className="short-text">Qty.</span>
                                </p>
                            </div>
                            <div className="cart-item-total-div">
                                <p className="font-bold font-adjust-title">Sum</p>
                            </div>
                            <div className="cart-item-remove-div">
                                <i className="fa-solid fa-trash remove-icon"></i>
                            </div>
                        </div>

                        <hr className="cart-bar" />

                        {/* {isCartEmpty ? ( */}
                            <>
                                {/* {food_list.map((item, index) => {
                                    if (cartItems[item.id] > 0) {
                                        return (
                                            <div key={index} id="cart-item-details" className="cart-items-title">
                                                <div className="cart-item-div">
                                                    <img src={item.imageUrl} className="cart-item-img" alt="img" />
                                                </div>
                                                <div className="cart-item-title-div">
                                                    <p className="font-adjust-items">{item.name}</p>
                                                    <div className='customized-div'>
                                                        <p>Customize</p>
                                                        <i className="fa-solid fa-greater-than"></i>
                                                    </div>
                                                </div>
                                                <div className="cart-item-price-div">
                                                    <p className="font-adjust-items">₹ {item.price}</p>
                                                </div>
                                                <div className="cart-item-quantity-div">
                                                    <p className="font-adjust-items">{cartItems[item.id]}</p>
                                                </div>
                                                <div className="cart-item-total-div">
                                                    <p className="font-adjust-items">₹ {item.price * cartItems[item.id]}</p>
                                                </div>
                                                <div className="cart-item-remove-div">
                                                    <i onClick={() => removeFromCart(item.id)} className="fa-solid fa-xmark remove-icon"></i>
                                                </div>
                                            </div>
                                        );
                                    }
                                })} */}
                                {/* <div className="cart-total-amount-section">
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
                                            <button onClick={handleCheckout} className="checkOut-btn">{isLoading ? "Processing..." : "PROCEED TO CHECKOUT"}</button>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        {/* ) : ( */}
                            <div className="empty-cart">
                                <h1 className='fw-bold'>No Items Added In The Cart...</h1>
                            </div>
                        {/* )} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
