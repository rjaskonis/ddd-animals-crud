import { ValueObject } from "@/shared/domain/value-object";
import { Result } from "@/shared/core/result";
import { ValidationResult } from "@/shared/core/validation-result";

export class AnimalType extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): Result<AnimalType> {
        const validationResult = this.validate(value);

        if (!validationResult.isValid) return Result.fail<AnimalType>(validationResult.error);

        return Result.ok<AnimalType>(new AnimalType(value));
    }

    static validate(value: string): ValidationResult {
        if (!value) return { isValid: false, error: "Animal type cannot be null or undefined" };
        if (!value.length) return { isValid: false, error: "Animal type cannot be empty" };
        if (value.length < 3) return { isValid: false, error: "Animal type too short" };

        return { isValid: true };
    }
}
