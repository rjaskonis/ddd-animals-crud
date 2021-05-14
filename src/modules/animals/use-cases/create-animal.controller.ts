import { Result } from "@/shared/core/result";
import { HttpController } from "@/shared/infra/http/controller";
import { HttpRequest, HttpResponse } from "@/shared/infra/http/transfer";
import { Request, Response } from "express";
import { AnimalData } from "../entity/data";
import { CreateAnimalUseCase } from "./create-animal.use-case";
export class CreateAnimalController extends HttpController<CreateAnimalUseCase> {
    constructor(useCase: CreateAnimalUseCase) {
        super(useCase);
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const animalData: AnimalData = httpRequest.body as AnimalData;

        const result = await this.useCase.execute(animalData);

        if (result.isFailure) return HttpResponse.badRequest(result.error);

        return HttpResponse.ok(result.getValue());
    }
}
