import { Identifier } from "@/shared/domain/identifier";
import { AnimalData } from "../entity/data";

export interface AnimalRepository {
    findAllAnimals: () => Promise<AnimalData[]>;
    findAnimalById: (id: Identifier) => Promise<AnimalData>;
    add: (user: AnimalData) => Promise<void>;
    delete: (id: Identifier) => Promise<boolean>;
}
