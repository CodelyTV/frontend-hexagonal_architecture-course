import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export class CourseCreator {
	constructor(private readonly repository: CourseRepository) {}

	async create(id: string, title: string, imageUrl: string): Promise<void> {
		const course = Course.create({ id, title, imageUrl });

		await this.repository.save(course);
	}
}
