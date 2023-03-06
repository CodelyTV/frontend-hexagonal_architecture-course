import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function createCourse(courseRepository: CourseRepository, course: Course): void {
	courseRepository.save(course);
}
