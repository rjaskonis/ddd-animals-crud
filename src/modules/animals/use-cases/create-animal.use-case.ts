import { Either } from "@/shared/core/either";
import { Result } from "@/shared/core/result";
import { UseCase } from "@/shared/core/use-case";
import { Animal } from "../entity/animal";
import { AnimalData } from "../entity/data";
import { AnimalRepository } from "../ports/animal-repo";

export class CreateAnimalUseCase implements UseCase<AnimalData, Result<Either<Animal, Error>>> {
    constructor(private readonly repository: AnimalRepository) {}

    async execute(data: AnimalData): Promise<Result<Either<Animal, Error>>> {
        return Animal.create(data);
    }
}
