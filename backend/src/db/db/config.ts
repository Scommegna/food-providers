// src/db/config.ts
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_STRING || "");
    console.log("✅ MongoDB conectado");
  } catch (err) {
    console.error("❌ Erro ao conectar com MongoDB:", err);
    process.exit(1);
  }
}
