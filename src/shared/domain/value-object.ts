export abstract class ValueObject<T> {
    constructor(public readonly value: T) {
        Object.freeze(this);
    }
}
