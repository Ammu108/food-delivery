import express from "express";
import { login, registerUser, allUsers, deleteUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/signup", registerUser);
userRouter.post("/login", login);
userRouter.get("/all-users", allUsers)
userRouter.delete("/delete-user", deleteUser);

export default userRouter;