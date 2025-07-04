import { queryLocalAgent } from "../agents/localAgent";
import NodeGeocoder from "node-geocoder";
import FoodProvider from "../models/FoodProvider";
import { Request, Response } from "express";
import { EXTERNAL_AGENT_MODEL } from "../agents/externalAgent";

import dotenv from "dotenv";

dotenv.config();

export const getBestFoodProvider = async (req: Request, res: Response) => {
  const { address } = req.body;

  try {
    if (!address) {
      res.status(400).json({ error: "Address is required" });
    }

    const geocoder = NodeGeocoder({
      provider: "locationiq",
      apiKey: process.env.GEOCODER_API_KEY,
      formatter: null,
    });

    const location = await geocoder.geocode(address);

    if (!location || location.length === 0) {
      res.status(404).json({ error: "Location not found" });
    }

    const { latitude, longitude } = location[0];
    const foodProvidersOptions = await FoodProvider.find();

    if (!foodProvidersOptions || foodProvidersOptions.length === 0) {
      res.status(404).json({ error: "No food providers found" });
    }

    const analysisPrompt = `Based on the coordinates (${latitude}, ${longitude}), find the closest food provider from the following options: ${JSON.stringify(
      foodProvidersOptions
    )}.  ONLY the _id of the best option.`;

    let bestFoodProviderId: string | null = null;

    try {
      const localResponse = await queryLocalAgent(analysisPrompt);
      bestFoodProviderId = localResponse.trim();

      const userMessagePrompt = `Given the selected _id: ${bestFoodProviderId}, and these food provider options: ${JSON.stringify(
        foodProvidersOptions
      )}, and the coordinates of the user (${latitude}, ${longitude}) generate a friendly response for the user with the best provider's name and address.`;

      const geminiResponse = await EXTERNAL_AGENT_MODEL.generateContent(
        userMessagePrompt
      );

      const finalResponse = geminiResponse.response.text().trim();

      res.status(200).json({ userResponse: finalResponse });
    } catch (err) {
      console.error("Error in local agent query:", err);
      res.status(500).json({ error: "Error with local agent" });
    }
  } catch (error) {
    console.error("Internal error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
