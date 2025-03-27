import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem("aToken") : '');
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const [dashData, setDashData] = useState(false);
    const [foodList, setFoodList] = useState([]);
    const [orderList, setorderList] = useState([]);

    const backendUrl = "https://food-del-backend-75ee.onrender.com" ||  import.meta.env.VITE_BACKEND_URL;
    // "https://food-del-backend-75ee.onrender.com" ||

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/all-users', {}, { headers: { aToken } })
            if(data.success){
                setAllUsers(data.allUsers.reverse())
                console.log(data.allUsers);
            }
        } catch (error) {
            console.log(error)
            toast.error(data.message)
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/admin/dashboard", { headers: { aToken } });
            if(data.success){
                console.log(data.dashData)
                setDashData(data.dashData)
            }
        } catch (error) {
            console.log(error)
            toast.error(data.message)
        }
    }

    const getFoodList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/food/food-list', { headers: { aToken } })
            if(response.data.success){
                setFoodList(response.data.data || [])
                console.log(response.data)
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    const getOrderData = async () => {
        try {
            const response = await axios.post(backendUrl + "/api/order/all-orders", {}, { headers: { aToken }})
            if(response.data.success){
                setorderList(response.data.allOrders.reverse())
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    const value = {
        aToken,
        setAToken,
        backendUrl,
        getAllUsers,
        allUsers,
        getDashData,
        dashData,
        foodList,
        getFoodList,
        orderList,
        getOrderData,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider