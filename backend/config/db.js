import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amenx000:amankumar123@cluster0.rbssk.mongodb.net/foodDeliveryApp').then(()=> console.log("DB Connected"));
}