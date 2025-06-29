import express from "express";
import { getStaticResponse } from "../controllers/staticResponsesController";

const router = express.Router();

router.get("/:id", getStaticResponse);

export default router;
