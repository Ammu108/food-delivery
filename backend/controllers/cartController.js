import userModel from "../models/userModel.js";

// Add Items In the user cart
const addToCart = async (req, res) => {
    try {

        console.log("User ID:", req.body.userId);
        let userData = await userModel.findById(req.body.userId);
        // console.log("User Data:", userData);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = await userData?.cartData || {};

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData}, { new: true })
        res.json({success:true,message:"Added To Cart"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// remove Items from the user cart
const removeItem = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId);
        // console.log("userData : ", userData)
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export { addToCart, removeItem, getCart }