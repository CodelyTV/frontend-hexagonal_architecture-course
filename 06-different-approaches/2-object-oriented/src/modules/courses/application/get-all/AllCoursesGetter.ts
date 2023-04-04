import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export class AllCoursesGetter {
	constructor(private readonly repository: CourseRepository) {}

	async get(): Promise<Course[]> {
		return this.repository.getAll();
	}
}
