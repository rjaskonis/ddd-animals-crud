import { routeAdapter } from "@/shared/infra/http/adapter";
import { Router } from "express";
import { createAnimalController } from "../../use-cases";

const animalRouter = Router();

animalRouter.post("/animals", routeAdapter(createAnimalController));

export { animalRouter };
