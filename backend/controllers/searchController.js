import foodModel from "../models/foodModel.js";

const searchFood = async (req, res) => {
    try {
        
        const query = req.query.q;
        if (!query) return res.json({ success: false, message: "Search query is required" });

        const results = await foodModel.find({
            name: { $regex: query, $options: 'i' }
        });

        res.json({ success: true, results });

    } catch (error) {
        console.log("Error deleting item:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export { searchFood }