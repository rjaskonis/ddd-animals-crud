export class Result<T> {
    public readonly isFailure: boolean;
    private _value: T;

    public constructor(public readonly isSuccess: boolean, public error?: T | any, value?: T) {
        if (isSuccess && error) {
            throw new Error("InvalidOperation: A result cannot be successful and contain an error");
        }
        if (!isSuccess && !error) {
            throw new Error("InvalidOperation: A failing result needs to contain an error message");
        }

        this.isFailure = !isSuccess;
        this._value = value as T;

        Object.freeze(this);
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, null, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }

    public getValue(): T {
        return this._value;
    }
}
