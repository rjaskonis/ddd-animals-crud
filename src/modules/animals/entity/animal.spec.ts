import { Animal } from "@/modules/animals/entity/animal";
import { InvalidAnimalNameError } from "@/modules/animals/entity/errors/invalid-name";
import { InvalidAnimalAgeError } from "./errors/invalid-age";
import { InvalidAnimalWeightError } from "./errors/invalid-weight";

describe("Animal domain entity", () => {
    it("should create a animal entity", () => {
        const animal1 = Animal.create({ name: "Moo", type: "cow", weight: 10, age: 1 });

        expect(animal1.isSuccess).toBe(true);
        expect((animal1.getValue() as Animal).name.value).toBe("Moo");
    });

    it("should not create a animal entity with invalid name (empty value)", () => {
        const animal1 = Animal.create({ name: "", type: "cow", weight: 10, age: 1 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalNameError("Animal name cannot be empty"));
    });

    it("should not create a animal entity with invalid name (too few characters)", () => {
        const animal1 = Animal.create({ name: "m", type: "cow", weight: 10, age: 1 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalNameError("Animal name too short"));
    });

    it("should not create a animal entity with invalid weight (negative value)", () => {
        const animal1 = Animal.create({ name: "Moo", type: "cow", weight: -2, age: 1 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalWeightError("Animal weight cannot be negative value"));
    });

    it("should not create a animal entity with invalid weight (zero value)", () => {
        const animal1 = Animal.create({ name: "Moo", type: "cow", weight: 0, age: 1 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalWeightError("Animal weight cannot be empty or zero"));
    });

    it("should not create a animal entity with invalid age (negative value)", () => {
        const animal1 = Animal.create({ name: "Moo", type: "cow", weight: 10, age: -5 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalAgeError("Animal age cannot be negative value"));
    });

    it("should not create a animal entity with invalid age (decimal value)", () => {
        const animal1 = Animal.create({ name: "Moo", type: "cow", weight: 10, age: 1.5 });

        expect(animal1.isFailure).toBe(true);
        expect(animal1.error).toEqual(new InvalidAnimalAgeError("Animal age cannot be decimal value"));
    });
});
