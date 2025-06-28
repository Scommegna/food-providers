import StaticResponseProvider from "../models/StaticResponse";

import { Request, Response } from "express";

export const getStaticResponse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).json({ error: "ID is required" });
    }

    const staticResponse = await StaticResponseProvider.findOne({
      responseId: id,
    });

    if (!staticResponse) {
      res.status(404).json({ error: "Static response not found" });
    }

    res.status(200).json(staticResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};
