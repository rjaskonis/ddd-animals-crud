import path from "path";
import dotenv from "dotenv";

dotenv.config();

import express, { Application } from "express";
import compression from "compression";
import { animalRouter } from "@/modules/animals/infra/http/routes";

const app: Application = express();
const PORT = process.env.PORT || 3333;

app.use(compression({ threshold: 0, filter: () => true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use(animalRouter);

app.set("PORT", PORT);
app.set("SUPERSECRET_KEY", process.env.SUPERSECRET_KEY);

export default app;
