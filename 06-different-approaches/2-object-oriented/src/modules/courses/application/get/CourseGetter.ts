import { Course } from "../../domain/Course";
import { CourseId } from "../../domain/CourseId";
import { CourseRepository } from "../../domain/CourseRepository";

export class CourseGetter {
	constructor(private readonly repository: CourseRepository) {}

	async get(id: string): Promise<Course | null> {
		return this.repository.get(new CourseId(id));
	}
}
