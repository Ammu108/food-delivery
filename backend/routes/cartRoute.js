import express from "express"
import { addToCart, getCart, removeItem } from "../controllers/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeItem);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;