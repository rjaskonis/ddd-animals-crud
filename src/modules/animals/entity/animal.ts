//tipo,nome,id,peso e idade em meses
import { Either } from "@/shared/core/either";
import { Result } from "@/shared/core/result";
import { Entity } from "@/shared/domain/entity";
import { AnimalAge } from "./age";
import { AnimalData } from "./data";
import { InvalidAnimalAgeError } from "./errors/invalid-age";
import { InvalidAnimalNameError } from "./errors/invalid-name";
import { InvalidAnimalTypeError } from "./errors/invalid-type";
import { InvalidAnimalWeightError } from "./errors/invalid-weight";
import { AnimalName } from "./name";
import { AnimalType } from "./type";
import { AnimalWeight } from "./weight";

export class Animal extends Entity<number> {
    private constructor(
        public readonly name: AnimalName,
        public readonly type: AnimalType,
        public readonly weight: AnimalWeight,
        public readonly age: AnimalAge
    ) {
        super();

        this.name = name;
    }

    get id() {
        return this._id;
    }

    public static create(data: AnimalData): Result<Either<Animal, Error>> {
        const name = AnimalName.create(data.name);
        const type = AnimalType.create(data.type);
        const weight = AnimalWeight.create(data.weight);
        const age = AnimalAge.create(data.age);

        if (name.isFailure) return Result.fail<InvalidAnimalNameError>(new InvalidAnimalNameError(name.error));
        if (type.isFailure) return Result.fail<InvalidAnimalTypeError>(new InvalidAnimalTypeError(type.error));
        if (weight.isFailure) return Result.fail<InvalidAnimalWeightError>(new InvalidAnimalWeightError(weight.error));
        if (age.isFailure) return Result.fail<InvalidAnimalAgeError>(new InvalidAnimalAgeError(age.error));

        return Result.ok<Animal>(new Animal(name.getValue(), type.getValue(), weight.getValue(), age.getValue()));
    }
}
