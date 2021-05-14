import { MongoDBAnimalRepository } from "@/modules/animals/adapters/mongodb.repo";
import { CreateAnimalUseCase } from "@/modules/animals/use-cases/create-animal.use-case";

describe("Create animal use case", () => {
    let createAnimalUseCase: CreateAnimalUseCase;

    beforeAll(() => {
        createAnimalUseCase = new CreateAnimalUseCase(new MongoDBAnimalRepository());
    });

    it("should execute", async () => {
        const result = await createAnimalUseCase.execute({ type: "Cow", name: "Xoxo", weight: 10, age: 1 });

        console.log(result);
    });
});
