import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export async function createCourse(
	courseRepository: CourseRepository,
	course: Course
): Promise<void> {
	await courseRepository.save(course);
}
