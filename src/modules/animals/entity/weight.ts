import { ValueObject } from "@/shared/domain/value-object";
import { Result } from "@/shared/core/result";
import { ValidationResult } from "@/shared/core/validation-result";

export class AnimalWeight extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): Result<AnimalWeight> {
        const validationResult = this.validate(value);

        if (!validationResult.isValid) return Result.fail<AnimalWeight>(validationResult.error);

        return Result.ok<AnimalWeight>(new AnimalWeight(value));
    }

    static validate(value: number): ValidationResult {
        if (value < 0) return { isValid: false, error: "Animal weight cannot be negative value" };
        if (!value || value == 0) return { isValid: false, error: "Animal weight cannot be empty or zero" };

        return { isValid: true };
    }
}
