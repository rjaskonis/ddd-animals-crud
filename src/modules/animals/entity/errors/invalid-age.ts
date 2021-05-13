export class InvalidAnimalAgeError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "InvalidAnimalAgeError";
    }
}
