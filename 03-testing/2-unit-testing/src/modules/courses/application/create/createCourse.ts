import { Course, ensureCourseIsValid } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function createCourse(courseRepository: CourseRepository, course: Course): void {
	ensureCourseIsValid(course);

	courseRepository.save(course);
}
