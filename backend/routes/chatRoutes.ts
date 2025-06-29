import express from "express";
import { getBestFoodProvider } from "../controllers/chatController";

const router = express.Router();

router.post("/", getBestFoodProvider);

export default router;
