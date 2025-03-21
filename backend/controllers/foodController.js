import foodModel from "../models/foodModel.js";
import fs from "fs";

const addItem = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        await food.save()
        res.json({ success: true, message: "Food Item Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

// API to get all food items
const listedFood = async (req, res) => {
    try {
        const foodList = await foodModel.find({})
        res.json({ success: true, data: foodList })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

// API to remove item
const removeItem = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        // Delete image file if it exists
        const imagePath = `uploads/${food.image}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

export { addItem, listedFood, removeItem }