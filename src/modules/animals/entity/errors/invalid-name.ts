export class InvalidAnimalNameError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "InvalidNameError";
    }
}
