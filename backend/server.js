import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js" 
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import adminRouter from "./routes/adminRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = process.env.PORT || 4000;

// DB Connection
connectDB();

// middleware
app.use(express.json())
app.use(cors())

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);
app.use("/images",express.static("uploads"))
app.use("/api/food", foodRouter);
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started On http://localhost:${port}`)
})