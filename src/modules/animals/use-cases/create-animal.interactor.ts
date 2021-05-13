import { Either } from "@/shared/core/either";
import { Result } from "@/shared/core/result";
import { UseCase } from "@/shared/core/use-case";
import { Animal } from "../entity/animal";
import { AnimalData } from "../entity/data";
import { AnimalRepository } from "../ports/animal-repo";

type Response = Either<Result<any>, Error>;

export class CreateAnimalUseCase implements UseCase<AnimalData, Response> {
    constructor(private readonly repository: AnimalRepository) {}

    async execute(data: AnimalData): Promise<Response> {
        Animal.create(data);

        return new Promise((resolve) => resolve(new Error()));
    }
}
