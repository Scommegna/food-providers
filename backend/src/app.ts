import express from "express";
import chatRouter from "./routes/chatRoutes";
import staticResponseRouter from "./routes/staticResponsesRoutes";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/chat", chatRouter);
app.use("/staticResponse", staticResponseRouter);

export default app;
