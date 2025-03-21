import express from "express"
import { addItem, listedFood, removeItem } from "../controllers/foodController.js";
import multer from "multer"

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer ({storage:storage})

foodRouter.post("/add-item", upload.single("image"), addItem);
foodRouter.get("/food-list", listedFood);
foodRouter.post("/remove-food", removeItem);

export default foodRouter;