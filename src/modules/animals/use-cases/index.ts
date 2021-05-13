import { MongoDBAnimalRepository } from "@/modules/animals/adapters/mongodb.repo";
import { CreateAnimalUseCase } from "@/modules/animals/use-cases/create-animal.interactor";
import { CreateAnimalController } from "@/modules/animals/use-cases/create-animal.controller";

const createAnimalUseCase = new CreateAnimalUseCase(new MongoDBAnimalRepository());
const createAnimalController = new CreateAnimalController(createAnimalUseCase);

export { createAnimalUseCase, createAnimalController };
