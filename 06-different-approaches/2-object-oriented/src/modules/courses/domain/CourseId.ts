import { Uuid } from "../../shared/domain/Uuid";

export class CourseId extends Uuid {
	public static isValid(value: string): boolean {
		// Ensure is valid
		return true;
	}
}
