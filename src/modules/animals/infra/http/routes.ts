import express, { Request, Response } from "express";
import { createAnimalController } from "../../use-cases";

const animalRouter = express.Router();

animalRouter.post("/animals", createAnimalController.execute);

export { animalRouter };
