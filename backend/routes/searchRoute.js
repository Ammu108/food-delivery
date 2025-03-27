import express from "express"
import { searchFood } from "../controllers/searchController.js";

const searchRouter = express.Router();

searchRouter.get("/search-item", searchFood)

export default searchRouter;
