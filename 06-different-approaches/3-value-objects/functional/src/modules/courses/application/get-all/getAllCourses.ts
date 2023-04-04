import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function getAllCourses(courseRepository: CourseRepository) {
	return async function (): Promise<Course[]> {
		return courseRepository.getAll();
	};
}
