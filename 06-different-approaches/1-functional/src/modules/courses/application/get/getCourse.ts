import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export async function getCourse(
	courseRepository: CourseRepository,
	courseId: string
): Promise<Course | null> {
	return courseRepository.get(courseId);
}
