import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import { foodMenu } from "../assets/assets";
import axios from "axios"


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const url = "https://food-del-backend-75ee.onrender.com" ||  "http://localhost:4000";
    // "https://food-del-backend-75ee.onrender.com" || 
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [food_list, setFoodList] = useState([])
    const [cartItems, setCartItems] = useState({});
    const [orderList, setOrderList] = useState([]);

    const addToCart = async (itemId) => {
        if (token) {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            } else {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            }
            
            if (token && user) {
                await axios.post(url + "/api/cart/add", 
                    { userId: user._id, itemId }, // ✅ Include userId
                    { headers: { token } }
                );
            }
        } else {
            alert("Please Sign In First");
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token && user ) {
            await axios.post(url + "/api/cart/remove", 
                { userId: user._id, itemId }, // ✅ Include userId
                { headers: { token } }
            );
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {  // ✅ Check if itemInfo exists before accessing price
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, {headers:{token}});
        console.log("Cart API Response:", response.data);
        if (response.data.success) {
            setCartItems(response.data.cartData || {}); // ✅ Ensure it's always an object
        } else {
            console.error("Error loading cart:", response.data.message);
        }
    }

    const getFoodList = async () => {

        try {

            const response = await axios.get(url + '/api/food/food-list')
            if (response.data.success) {
                setFoodList(response.data.data)
                console.log(response.data)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const getOrderData = async () => {
        try {
            const response = await axios.get(url + "/api/order/orders", { headers: { token }})
            if(response.data.success){
                setOrderList(response.data.allOrders)
            }
        } catch (error) {
            console.log(error);
            // toast.error(error);
        }
    }

    useEffect(() => {
        if (token) {
            loadCartData(token);
        }
    }, [token]);

    useEffect(() => {
        getFoodList()
    }, [])

    const value = {
        token,
        food_list,
        foodMenu,
        cartItems,
        addToCart,
        setCartItems,
        removeFromCart,
        getTotalCartAmount,
        url,
        setToken,
        user,
        setUser,
        orderList,
        getOrderData,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;