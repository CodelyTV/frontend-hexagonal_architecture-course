import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function getCourse(courseRepository: CourseRepository) {
	return async function (courseId: string): Promise<Course | null> {
		return courseRepository.get(courseId);
	};
}
