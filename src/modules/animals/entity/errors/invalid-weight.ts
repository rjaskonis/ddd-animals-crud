export class InvalidAnimalWeightError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "InvalidAnimalWeightError";
    }
}
