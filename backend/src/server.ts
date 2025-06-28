import app from "./app";
import dotenv from "dotenv";

import { connectDB } from "./db/config";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}

startServer();
