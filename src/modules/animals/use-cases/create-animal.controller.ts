import { Controller } from "@/shared/infra/controller";
import { Request, Response } from "express";
import { AnimalData } from "../entity/data";
import { CreateAnimalUseCase } from "./create-animal.interactor";

export class CreateAnimalController implements Controller {
    constructor(private readonly useCase: CreateAnimalUseCase) {}

    execute(req: Request, res: Response): Promise<void> {
        this.useCase.execute({ ...req.body } as AnimalData);

        return new Promise((resolve) => resolve());
    }
}
