import { queryLocalAgent } from "../agents/localAgent";
import { EXTERNAL_AGENT_MODEL } from "../agents/externalAgent";

import NodeGeocoder from "node-geocoder";
import FoodProvider from "../models/FoodProvider";
import { Request, Response } from "express";

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
    )}. RETURN ONLY the _id of the best option.`;

    let bestFoodProviderId: string | null = null;
    let userResponse: string | null = null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const localResponse = await queryLocalAgent(
        analysisPrompt,
        controller.signal
      );
      bestFoodProviderId = localResponse.trim();

      const geminiMessagePrompt = `Given the selected _id: ${bestFoodProviderId}, and these food provider options: ${JSON.stringify(
        foodProvidersOptions
      )}, generate a friendly response for the user with the best provider's name and address.`;

      const geminiResponse = await EXTERNAL_AGENT_MODEL.generateContent(
        geminiMessagePrompt
      );
      userResponse = geminiResponse.response.text().trim();
    } catch (err) {
      const fallbackPrompt = `${analysisPrompt} Then, generate a message for the user with the best food provider name and address. Do not include the _id.`;

      const fallbackResponse = await EXTERNAL_AGENT_MODEL.generateContent(
        fallbackPrompt
      );
      userResponse = fallbackResponse.response.text().trim();
    } finally {
      clearTimeout(timeout);
    }

    res.status(200).json({ userResponse });
  } catch (error) {
    console.error("Internal error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
