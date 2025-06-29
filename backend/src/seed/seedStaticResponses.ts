import mongoose from "mongoose";
import dotenv from "dotenv";
import StaticResponseProvider from "../models/StaticResponse";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING as string);
    console.log("📦 Conectado ao MongoDB");

    const staticResponses = [
      {
        responseId: 1,
        response:
          "Hello! Type your address to find the nearest food provider from your home!",
      },
      {
        responseId: 2,
        response:
          "Thanks for your address! Now I will find the best food provider for you.",
      },
      {
        responseId: 3,
        response:
          "Thanks for your patience! I found the best food provider for you. Enjoy your meal!",
      },
    ];

    await StaticResponseProvider.insertMany(staticResponses);
    console.log("✅ Respostas inseridas com sucesso");
  } catch (err) {
    console.error("❌ Erro ao popular dados:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Conexão com MongoDB encerrada");
  }
};

seed();
