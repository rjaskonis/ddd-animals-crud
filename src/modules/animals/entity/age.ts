import { ValueObject } from "@/shared/domain/value-object";
import { Result } from "@/shared/core/result";
import { ValidationResult } from "@/shared/core/validation-result";

export class AnimalAge extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): Result<AnimalAge> {
        const validationResult = this.validate(value);

        if (!validationResult.isValid) return Result.fail<AnimalAge>(validationResult.error);

        return Result.ok<AnimalAge>(new AnimalAge(value));
    }

    static validate(value: number): ValidationResult {
        if (value < 0) return { isValid: false, error: "Animal age cannot be negative value" };
        if (!Number.isInteger(value)) return { isValid: false, error: "Animal age cannot be decimal value" };
        // if (value.length < 3) return { isValid: false, error: "Animal weight too short" };

        return { isValid: true };
    }
}
