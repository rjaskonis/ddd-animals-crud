export class InvalidAnimalTypeError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "InvalidAnimalTypeError";
    }
}
