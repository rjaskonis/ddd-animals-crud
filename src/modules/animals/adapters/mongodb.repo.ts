import { Identifier } from "@/shared/domain/identifier";
import { AnimalData } from "../entity/data";
import { AnimalRepository } from "../ports/animal-repo";

export class MongoDBAnimalRepository implements AnimalRepository {
    findAllAnimals: () => Promise<AnimalData[]>;
    findAnimalById: (id: Identifier) => Promise<AnimalData>;
    add: (user: AnimalData) => Promise<void>;
    delete: (id: Identifier) => Promise<boolean>;
}
