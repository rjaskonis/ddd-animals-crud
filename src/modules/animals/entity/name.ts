import { ValueObject } from "@/shared/domain/value-object";
import { Result } from "@/shared/core/result";
import { ValidationResult } from "@/shared/core/validation-result";

export class AnimalName extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): Result<AnimalName> {
        const validationResult = this.validate(value);

        if (!validationResult.isValid) return Result.fail<AnimalName>(validationResult.error);

        return Result.ok<AnimalName>(new AnimalName(value));
    }

    static validate(value: string): ValidationResult {
        if (!value) return { isValid: false, error: "Animal name cannot be null or undefined" };
        if (!value.length) return { isValid: false, error: "Animal name cannot be empty" };
        if (value.length < 3) return { isValid: false, error: "Animal name too short" };

        return { isValid: true };
    }
}
