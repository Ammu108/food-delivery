import express from "express"
import { adminLogin, dashData } from "../controllers/adminController.js"

const adminRouter = express.Router()

adminRouter.post("/login", adminLogin)
adminRouter.get("/dashboard", dashData)

export default adminRouter;