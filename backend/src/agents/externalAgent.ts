import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";

dotenv.config();

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const EXTERNAL_AGENT_MODEL = genAi.getGenerativeModel({
  model: "gemini-2.5-flash",
});
