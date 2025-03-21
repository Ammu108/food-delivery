import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";
import orderModel from "../models/orderModel.js";

const adminLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });

        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// Api to get the dashboard data

const dashData = async (req, res) => {
    try {

        const users = await userModel.find({})
        const list = await foodModel.find({})
        const orders = await orderModel.find({})

        const foodProcessing = await orderModel.countDocuments({ status: "Food Processing" });
        const outForDelivery = await orderModel.countDocuments({ status: "Out For Delivery" });
        const orderDelivered = await orderModel.countDocuments({ status: "Order Delivered" });

        const dashData = {
            users: users.length,
            list: list.length,
            totalOrders: foodProcessing + outForDelivery + orderDelivered,
            foodProcessing,
            outForDelivery,
            orderDelivered,
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" });
    }
}

export { adminLogin, dashData }