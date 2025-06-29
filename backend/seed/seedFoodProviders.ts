import mongoose from "mongoose";
import dotenv from "dotenv";
import FoodProvider from "../models/FoodProvider";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING as string);
    console.log("📦 Conectado ao MongoDB");

    const foodProviders = [
      {
        name: "Sabor do Campo",
        address: "Rua das Flores, 123 - São Paulo, SP",
        coordinates: { latitude: -23.55052, longitude: -46.63331 },
      },
      {
        name: "Delícias da Vó Maria",
        address: "Av. Brasil, 456 - Belo Horizonte, MG",
        coordinates: { latitude: -19.92083, longitude: -43.93778 },
      },
      {
        name: "Cantinho Mineiro",
        address: "Rua Tiradentes, 789 - Ouro Preto, MG",
        coordinates: { latitude: -20.38563, longitude: -43.50336 },
      },
      {
        name: "Verde Vida Orgânicos",
        address: "Estrada da Saúde, 1020 - Campinas, SP",
        coordinates: { latitude: -22.90988, longitude: -47.06258 },
      },
      {
        name: "Restaurante Bom Prato",
        address: "Rua da Alegria, 12 - Rio de Janeiro, RJ",
        coordinates: { latitude: -22.90685, longitude: -43.1729 },
      },
      {
        name: "Empório da Serra",
        address: "Av. das Montanhas, 345 - Petrópolis, RJ",
        coordinates: { latitude: -22.50429, longitude: -43.17858 },
      },
      {
        name: "Rancho Natural",
        address: "Fazenda Boa Vista, Km 17 - Uberlândia, MG",
        coordinates: { latitude: -18.91861, longitude: -48.27694 },
      },
      {
        name: "Comida de Mãe",
        address: "Rua das Acácias, 654 - Curitiba, PR",
        coordinates: { latitude: -25.42836, longitude: -49.27325 },
      },
      {
        name: "Refúgio do Sabor",
        address: "Travessa das Palmeiras, 88 - Salvador, BA",
        coordinates: { latitude: -12.97139, longitude: -38.50139 },
      },
      {
        name: "Nutrir Bem",
        address: "Rua São Bento, 100 - Florianópolis, SC",
        coordinates: { latitude: -27.59538, longitude: -48.54805 },
      },
    ];

    await FoodProvider.insertMany(foodProviders);
    console.log("✅ Provedores de comida inseridos com sucesso");
  } catch (err) {
    console.error("❌ Erro ao popular dados:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Conexão com MongoDB encerrada");
  }
};

seed();
