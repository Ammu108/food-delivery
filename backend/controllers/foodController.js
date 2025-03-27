import foodModel from "../models/foodModel.js";
import { v2 as cloudinary } from 'cloudinary';

const addItem = async (req, res) => {
    try {

        const { name, description, price, category, } = req.body;
        const imageFile = req.file

        // Check if Doctor Already Exists
        const existingItem = await foodModel.findOne({ name });
        if (existingItem) {
            return res.status(400).json({ message: "Item with this name already exists." });
        }

        // Validate Required Fields
        if (!name || !description || !price || !category) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url

        const newFood = new foodModel({
            name,
            description,
            price,
            category,
            image: imageUrl,
        })

        await newFood.save();
        res.status(201).json({ message: "Item added successfully!", food: newFood });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
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
        const { id } = req.params;  // Get id from request params
        const food = await foodModel.findById(id);

        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        await foodModel.findByIdAndDelete(id);  // Delete the item

        res.json({ success: true, message: "Item deleted successfully" });

    } catch (error) {
        console.log("Error deleting item:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export { addItem, listedFood, removeItem }