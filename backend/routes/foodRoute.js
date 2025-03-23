import express from "express"
import { addItem, listedFood, removeItem } from "../controllers/foodController.js";
import upload from "../middlewares/multer.js";

const foodRouter = express.Router();

foodRouter.post("/add-item", upload.single("image"), addItem);
foodRouter.get("/food-list", listedFood);
foodRouter.delete("/remove-food/:id", removeItem);

export default foodRouter;