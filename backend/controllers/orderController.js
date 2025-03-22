import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";

// Placing user order for frontend
const placeOrder = async (req, res) => {

    try {

        const { name, email, street, city, state, zipCode, country, phone, amount, paymentMethod } = req.body;
        const userId = req.userId;

        if (!name || !email || !street || !city || !state || !zipCode || !country || !phone || !amount || !paymentMethod) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        // Fetch user to get cart data
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        const newOrder = new orderModel({
            userId,
            name,
            email,
            street,
            city,
            state,
            zipCode,
            country,
            phone,
            amount,
            status: "Food Processing",
            paymentMethod,
            cartData: user.cartData,
        });

        await newOrder.save();

        return res.status(201).json({ success: true, message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const getOrderData = async (req, res) => {
    try {
        // Fetch all orders
        const allOrders = await orderModel.find({});

        // Populate cart items for each order
        const populatedOrders = await Promise.all(
            allOrders.map(async (order) => {
                const cartData = order.cartData || {};

                // Fetch all product details in a single query
                const productIds = Object.keys(cartData);
                const products = await foodModel.find({ _id: { $in: productIds } });

                // Map products with their quantities
                const cartItems = products.map((product) => ({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    quantity: cartData[product._id] || 1, // Ensure quantity is retrieved
                }));

                return { ...order._doc, cartItems };
            })
        );

        res.json({ success: true, allOrders: populatedOrders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error retrieving orders" });
    }
};

const clientOrderData = async (req, res) => {
    try {
        // Fetch all orders
        const allOrders = await orderModel.find({});

        // Populate cart items for each order
        const populatedOrders = await Promise.all(
            allOrders.map(async (order) => {
                const cartData = order.cartData || {};

                // Fetch all product details in a single query
                const productIds = Object.keys(cartData);
                const products = await foodModel.find({ _id: { $in: productIds } });

                // Map products with their quantities
                const cartItems = products.map((product) => ({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    quantity: cartData[product._id] || 1, // Ensure quantity is retrieved
                }));

                return { ...order._doc, cartItems };
            })
        );

        res.json({ success: true, allOrders: populatedOrders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error retrieving orders" });
    }
}

const updateCart =  async (req, res) => {
    try {
        const { orderId, status } = req.body;

        if (!orderId || !status) {
            return res.status(400).json({ success: false, message: "Order ID and status are required" });
        }

        const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        res.json({ success: true, message: "Order status updated", order: updatedOrder });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error retrieving orders" });
    }
}

// API to delete the appointment 

const deleteOrder = async (req, res) => {
    try {

        const { id } = req.body;

        const deleteOrder = await orderModel.findByIdAndDelete(id);

        if (!deleteOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        res.json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export { placeOrder, getOrderData, clientOrderData, updateCart, deleteOrder };
