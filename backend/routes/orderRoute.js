import express from "express"
import { clientOrderData, getOrderData, placeOrder, updateCart } from "../controllers/orderController.js";
import authAdminMiddleware from "../middlewares/authAdmin.js";
import authMiddleware from "../middlewares/auth.js";

const orderRouter = express.Router()

orderRouter.post("/order-place", authMiddleware ,placeOrder);
orderRouter.post("/all-orders", authAdminMiddleware , getOrderData);
orderRouter.get("/orders", authMiddleware , clientOrderData);
orderRouter.put("/update", updateCart);

export default orderRouter;