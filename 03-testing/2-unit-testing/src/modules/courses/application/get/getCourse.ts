import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function getCourse(courseRepository: CourseRepository, courseId: string): Course | null {
	return courseRepository.get(courseId);
}
